
exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('menu', function (table) {
		  table.increments('id').primary();
		  table.string('name');
		  table.string('info');
		  table.integer('price');
		  table.timestamps();
		})
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('menu')
	]);
};
