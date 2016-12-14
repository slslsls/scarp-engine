var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  var projectsObj = {};
  var postsObj = {};

  knex.select().from('projects').then(data => {
    projectsObj = data;
  });

  knex.select().from('posts').then(data => {
    postsObj = data;
  })

  res.send({
    projects: projectsObj,
    posts: postsObj
  });
  res.end();
});

module.exports = router;
