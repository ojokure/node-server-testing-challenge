module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './Database/languages.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './Database/migrations',
    },
    seeds: {
      directory: './Database/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './Database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './Database/migrations',
    },
    seeds: {
      directory: './Database/seeds',
    },
  },
};
