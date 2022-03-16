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
  // This route handles user authentication (login, logout, and registration)
app.use('/api/user', userRouter);

// =====<SERVE STATIC FILES>====================================================================================
  // For production build
app.use(express.static('build'));

// =====<APP SET>===============================================================================================
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
