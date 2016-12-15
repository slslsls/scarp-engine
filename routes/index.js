var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  var responseObject = {}

  Promise.all([
    knex.select().from('projects').then(data => {
      responseObject.projects = data;
    }),
    knex.select().from('posts').then(data => {
      responseObject.posts = data;
    })
  ]).then(values => {
    res.send(responseObject);
    res.end();
  }).catch(err => {
    console.log('Shit, an error: ' + err);
  });
});

module.exports = router;
