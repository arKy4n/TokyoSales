const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TokyoSalesDB',
    password: 'Rekha1976',
    port: 5432,
})

module.exports = pool;