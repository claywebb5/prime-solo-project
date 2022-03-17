// ===============<>===================

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET ALL PRAYERS
router.get('/', (req, res) => {
    let queryText = `SELECT "prayer"."prayer_name", "prayer"."prayer_text", "prayer"."interpretation", "user"."username" FROM "prayer"
    LEFT JOIN "user" ON "user"."id"="prayer"."user_id";`;
    pool.query(queryText).then(result => {
        // Send back results in an object
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting books', error);
        res.sendStatus(500);
    });
});

module.exports = router;