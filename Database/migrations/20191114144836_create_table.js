exports.up = function(knex) {
  return knex.schema.createTable("languages", table => {
    table.increments();
    table.string("language", 50).notNullable();
    table.string("end", 50).notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("languages");
};
