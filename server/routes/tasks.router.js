const express = require('express');
const {rejectUnauthenticated, } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();


router.get('/', (req, res) => {
  const query = `SELECT * FROM tasks ORDER BY "id" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all tasks', err);
      res.sendStatus(500)
    })

});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertTaskQuery = `
  INSERT INTO "tasks" ("name")
  VALUES ($1);`;
  // FIRST QUERY MAKES TASK
  pool.query(insertTaskQuery, [req.body.name])
    .then(() => res.sendStatus(201))
    .catch(err => {
        // catch for second query
        console.log('Failed to insert a new task:', err);
        res.sendStatus(500)
    });
});


module.exports = router;