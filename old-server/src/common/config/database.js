const mysql = require("think-model-mysql");

module.exports = {
  handle: mysql,
  database: "xzzshop",
  prefix: "xzzshop_",
  encoding: "utf8mb4",
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  dateStrings: true,
};
