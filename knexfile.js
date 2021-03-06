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
      filename: path.join(__dirname, '/server/donuts.sqlite')
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
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    }
  }
};
