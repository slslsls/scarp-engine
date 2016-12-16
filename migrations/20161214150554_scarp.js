
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('projects', function(table) {
      table.increments().primary();
      table.string('name');
      table.string('description');
      table.string('technologies');
      table.string('screenshots');
      table.string('github_url');
      table.string('deployment_url');
    }),
    knex.schema.createTableIfNotExists('posts', function(table) {
      table.increments().primary();
      table.timestamps('date');
      table.string('category');
      table.string('title');
      table.string('content');
    })
  ]);
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('projects'),
    knex.schema.dropTable('posts')
  ]);
}

/*

INSERT INTO projects (name, description, technologies, screenshots, github_url, deployment_url)
VALUES (
'Scarps Travel Agency',
'A travel agency that helps you plan trips',
'html, css',
'shopping-cart-3.png',
'github blah blah',
'heroku blah blah');

*/
