
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
    knex.schema.createTable('posts', function)
  ])
};

exports.down = function(knex, Promise) {

};
