module.exports = {
  url: process.env.url || 'https://recipeaghost-production.up.railway.app',
  server: {
    port: parseInt(process.env.PORT) || 2368,
    host: '0.0.0.0'
  },
  database: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQLHOST,
      port: parseInt(process.env.MYSQLPORT),
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE
    }
  },
  mail: {
    transport: 'Direct'
  },
  logging: {
    transports: ['stdout']
  },
  paths: {
    contentPath: 'content'
  }
};