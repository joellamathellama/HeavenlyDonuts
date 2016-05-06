
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('menu').del(),

    // Inserts seed entries
    knex('menu').insert({name: 'Chocolate Donut', info: 'This chocolate is so delicious!!!', price: 100}),
    knex('menu').insert({name: 'Glaze Donut', info: 'This glaze is so delicious!!!', price: 75})
  );
};
