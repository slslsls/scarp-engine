var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  var projects, posts;

  knex.select().from('projects').then(data => {
    console.dir(data, {depth: 5});
    projects = data;
  });

  knex.select().from('posts').then(data => {
    console.dir(data, {depth: 5});
    posts = data;
  })

  res.send({
    projects: projects,
    posts: posts
  });
  res.end();
});

module.exports = router;
