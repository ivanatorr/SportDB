const Pool = require("pg").Pool;

const pool = new Pool({
  user: "ivanator",
  password: "ivan2001",
  host: "192.168.1.55",
  database: "sportdb",
  port: 5432,
});

module.exports = pool;
