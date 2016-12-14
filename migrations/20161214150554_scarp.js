
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', function(table) {
      table.increments().primary();
      table.string('name');
      table.string('description');
      table.string('technologies');
      table.string('github_url');
      table.string('deployment_url');
    }),
    knex.schema.createTable('posts', function(table) {
      table.increments().primary();
      table.timestamps(date);
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
