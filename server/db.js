const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TokyoSalesDB',
    password: '6153',
    port: 5432,
})

module.exports = pool;