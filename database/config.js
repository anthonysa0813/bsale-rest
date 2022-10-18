const { createPool } = require("mysql2/promise");

const pool = createPool({
  host:
    process.env.DB_HOST || "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  user: process.env.DB_USER || "bsale_test",
  password: process.env.DB_PASSWORD || "bsale_test",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_DATABASE || "bsale_test",
});

module.exports = pool;
