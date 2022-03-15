// =============<THE server.js FILE IS WHERE EVERYTHING IS CONFIGURED AND SET UP>============================
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// =====<ROUTE INCLUDES>=======================================================================================
const userRouter = require('./routes/user.router');

// =====<BODY PARSER MIDDLEWARE>===============================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// =====<PASSPORT SESSION CONFIGURATION>========================================================================
app.use(sessionMiddleware);

// =====<START UP PASSPORT SESSIONS>============================================================================
app.use(passport.initialize());
app.use(passport.session());

// =====< * ROUTES * >==========================================================================================
app.use('/api/user', userRouter);

// =====<SERVE STATIC FILES>====================================================================================
app.use(express.static('build'));

// =====<APP SET>===============================================================================================
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
