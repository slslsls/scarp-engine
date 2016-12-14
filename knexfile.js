module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/scarp_mocks'
  },
  production: {
    client: 'pg',
    connection: 'process.env.PG_CONNECTION_STRING'
  }
}
