// creating the connection to the mysql db
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hg12@niBN$",
    database: "employee_db",
  });
  module.exports = connection;