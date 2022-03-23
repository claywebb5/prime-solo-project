const express = require('express');
const {rejectUnauthenticated, } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

// =================<(READ) GET ALL TASKS>=========================
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

// ===================<(CREATE) POST NEW TASK>=========================
router.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
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

// ===================<(UPDATE) PUT AN UPDATE ON A TASK>=========================
router.put(`/update/:id`, (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const complete = req.body.complete;
  const notStarted = req.body.notStarted;
  const inProgress = req.body.inProgress;
  console.log('Task is:', name, complete, notStarted, inProgress);
  console.log('req.params', req.params)
  const query =`UPDATE "tasks" SET "name" = $1, complete = $2, "notStarted" = $3, "inProgress" = $4 WHERE id = ${req.params.id};`;
  pool.query(query, [name, complete, notStarted, inProgress])
    .then(result => {
      res.sendStatus(200);
    })
  .catch(err => {
    console.log('Error editing a task in tasks.router:', err);
    res.sendStatus(500);
  })
});

// ===================<(DELETE) DELETE A TASK>=========================
router.delete(`/delete/:id`, (req, res) => {
  let id = req.params.id;
  console.log('The task id is:', id);
  const query =`DELETE FROM "tasks" WHERE id = ${req.params.id};`;
  pool.query(query)
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('Error deleting a task in tasks.router:', err);
      
    })
});

module.exports = router;