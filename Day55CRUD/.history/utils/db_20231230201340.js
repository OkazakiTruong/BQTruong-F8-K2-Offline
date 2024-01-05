const postgres = require("postgres");
module.exports = postgres({
  host: "localhost", // Postgres ip address[s] or domain name[s]
  port: 5432, // Postgres server port[s]
  database: "f8_fullstack_k2", // Name of database to connect to
  username: "postgres", // Username of database user
  password: "truong1105", // Password of database user
});
