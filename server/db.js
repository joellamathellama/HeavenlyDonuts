const config = require('../knexfile.js');
const env = process.env.NODE_ENV;
const knex = require('knex')(config[env]);

module.exports = knex;

// knex.migrate.latest(config[env])
// 	.then(function(){
// 		return knex.seed.run();
// 	})
// 	.then(function(){
// 		console.log("seeded!");
// 	})
// 	.catch(function(err){
// 		console.log("doh! frickin seeds!", err);
// 	})
