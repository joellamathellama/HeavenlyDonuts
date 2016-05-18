const config = require('../knexfile.js');
const env = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[env]);
console.log("running in: ", env);
module.exports = knex;

if(env === 'development' || env === 'production'){
	knex.migrate.latest(config[env])
		.then(function() {
			return knex.seed.run();
		})
		.then(function() {
			console.log("seeded and ready to visit localhost:8000");
		})
		.catch(function(err) {// unsure if this argument is actually an error, console logging to find out
			console.log("doh! frickin seeds!", err);
		})
}
