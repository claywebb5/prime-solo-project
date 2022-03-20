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

  // RETURNING "id" will give us back the id of the created task
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
router.put('/', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const complete = req.body.complete;
  console.log('Task name is:', name);
  const query =`UPDATE "tasks" SET name = $1, complete = $2 WHERE id = $3;`;
  pool.query(query, [name, complete, id])
    .then(result => {
      res.sendStatus(200);
    })
  .catch(err => {
    console.log('Error editing a task in tasks.router:', err);
    res.sendStatus(500);
  })
});



// ===================<(DELETE) DELETE A TASK>=========================
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;