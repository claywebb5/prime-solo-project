// ===============<>===================

// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

const express = require('express');
const {rejectUnauthenticated, } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// =================<(READ) GET ALL PRAYERS>=========================
router.get('/', rejectUnauthenticated, (req, res) => {
    // let queryText = `SELECT "prayer"."prayer_name", "prayer"."prayer_text", "prayer"."interpretation", "user"."username" FROM "prayer"
    // LEFT JOIN "user" ON "user"."id"="prayer"."user_id";`;
    // let queryText = `SELECT "prayer"."prayer_name", "prayer"."prayer_text", "prayer"."interpretation" FROM "prayer";`;
   const query = `SELECT * FROM prayer;`;
    pool.query(query)
        .then(result => {
            // Send back results in an object
            res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting prayers', error);
        res.sendStatus(500);
    });
});


// ===================<(UPDATE) PUT NEW PRAYER INTERPRETATION>=========================
router.put('/:id', (req, res) => {
    console.log(req.body.interpretation);
    const interp = req.body.interpretation;
    const insertQuery = `UPDATE "prayer" SET "interpretation" = $1 WHERE id = ${req.params.id};`;
    pool.query(insertQuery, [interp])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(err => {
        console.log('Error editing a prayer:', err);
        res.sendStatus(500);
    })
});


module.exports = router;