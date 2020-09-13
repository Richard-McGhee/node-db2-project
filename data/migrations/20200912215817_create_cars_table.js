
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl.string('VIN').unique().notNullable().index()
      tbl.string('make').notNullable()
      tbl.string('model').notNullable()
      tbl.integer('mileage').notNullable().defaultTo(0)
      tbl.string('transmisson')
      tbl.string('title')
  })
};

exports.down = function(knex) {
  return knex.scehma.dropTableIfExists('cars')
};
