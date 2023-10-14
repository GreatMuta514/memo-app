const { Pool } = require("pg");
const pool = new Pool({
	host: 'localhost',
    database: 'memo_app',
    port: 5432,
    user: 'greatmuta',
    password: '',
});

module.exports = pool;