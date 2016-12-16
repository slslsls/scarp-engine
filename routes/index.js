var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/projects', function(req, res, next) {
  knex.select().from('projects').then(data => {
    res.send(data);
    res.end();
  });
});

router.get('/posts', function(req, res, next) {
  knex.select().from('posts').then(data => {
    res.send(data);
    res.end();
  });
});

module.exports = router;
