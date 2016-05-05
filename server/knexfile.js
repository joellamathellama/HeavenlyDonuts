const path = require('path');

const config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.NODE_ENV === 'test' 
              ? ':memory:' 
              : path.join(__dirname, '/db/donuts.sqlite')
  },
  migrations: {
  	directory: 'server/migrations'
  },
  useNullAsDefault: true
};

const knex = require('knex')(config);

module.exports = knex;

knex.migrate.latest([config]);
