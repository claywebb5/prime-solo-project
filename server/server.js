// =============<THE server.js FILE IS WHERE EVERYTHING IS CONFIGURED AND SET UP>============================
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const Pusher = require('pusher');
const app = express();
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// =====<INITIALIZE PUSHER>=======================================================================================
let pusher = new Pusher({
  appId: "1361275",
  key: "89062ebb8b009df054e1",
  secret: "4e4b7a670ff0bdb4a6a8",
  cluster: "us2",
  encrypted: true
});

// =====<ALLOW CORS>=======================================================================================
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// =====<ROUTE INCLUDES>=======================================================================================
const userRouter = require('./routes/user.router');

// Daily prayer------
const prayerRouter = require('./routes/prayer.router.js');

// Daily Tasks------
const tasksRouter = require('./routes/tasks.router.js');

// 12 Steps------
const twelveStepsRouter = require('./routes/steps.router.js');

// =====<BODY PARSER MIDDLEWARE>===============================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// =====<PASSPORT SESSION CONFIGURATION>========================================================================
  // This is setting up our sessions, the actual sessions middleware is in the modules folder
app.use(sessionMiddleware);

// =====<START UP PASSPORT SESSIONS>============================================================================
app.use(passport.initialize());
app.use(passport.session());

// =====< * ROUTES * >==========================================================================================
// -----<Handles requests to authenticate users joining the presence channel>-------------------
app.post('/pusher/auth', (req, res) => {
  let socketId = req.body.socket_id;
  let channel = req.body.channel_name;
  random_string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  let presenceData = {
      user_id: random_string,
      user_info: {
          username: '@' + random_string,
      }
  };
  let auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

// -----<Handles requests to trigger an event when a user updates their location>-------------------
app.post('/update-location', (req, res) => {
  // trigger a new post event via pusher
  pusher.trigger('presence-channel', 'location-update', {
      'username': req.body.username,
      'location': req.body.location
  })
  res.json({ 'status': 200 });
});

// -----<This route handles user authentication (login, logout, and registration)>--------------------------
app.use('/api/user', userRouter);

// Prayer route----------------------------
app.use('/api/prayer', prayerRouter);

// Tasks route----------------------------
app.use('/api/tasks', tasksRouter);

// Tasks route----------------------------
app.use('/api/steps', twelveStepsRouter);


// =====<SERVE STATIC FILES>====================================================================================
  // For production build
app.use(express.static('build'));

// =====<APP SET>===============================================================================================
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// ====< *** APP SET FROM MAP API *** >==================
// let port = 3128;
// app.listen(port);
// console.log('listening');

