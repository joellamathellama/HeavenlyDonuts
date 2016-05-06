const path = require('path');

module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true
  },
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, '/server/db/donuts.sqlite')
    },
    migrations: {
      directory: path.join(__dirname, '/server/migrations')
    },
    seeds: {
        directory: path.join(__dirname, '/server/seeds')
    },
    pool: {
      min: 0,
      max: 5
    },
    useNullAsDefault: true
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, '/server/db/donuts.sqlite')
    },
    migrations: {
      directory: path.join(__dirname, '/server/migrations')
    },
    useNullAsDefault: true
  }
};
// Sqlite connects directly to a disk file
// Migrations to create the schema
// useNullAsDefault was added due to a terminal warning.
// Knex:warning - sqlite does not support inserting default values.
