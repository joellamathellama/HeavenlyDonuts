const config = require('../knexfile.js');
const env = process.env.NODE_ENV;
const knex = require('knex')(config[env]);

module.exports = knex;

if(env === development){
	knex.migrate.latest(config[env])
		.then(function(){
			return knex.seed.run();
		})
		.then(function(){
			console.log("seeded!");
		})
		.catch(function(err){// unsure if this argument is actually an error, console logging to find out
			console.log("doh! frickin seeds!", err);
		})
}
else{
	knex.migrate.latest(config[env])
		.then(function(){
			console.log("Production migration successful!")
		})
		.catch(function(err){// unsure if this argument is actually an error, console logging to find out
			console.log("uh oh production migration error!", err);
		})
}
