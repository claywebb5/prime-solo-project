const express = require('express');
const {rejectUnauthenticated, } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

// =================<(READ) GET ALL STEPS>=========================
router.get('/', (req, res) => {
    const query = `SELECT * FROM twelve_steps;`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all steps', err);
        res.sendStatus(500)
      })
  
});

module.exports = router;