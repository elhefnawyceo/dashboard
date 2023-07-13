const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "elhefnawy",
  password: "",
  database: "users",
});

connection.connect(err => {
  if (err) {
    console.log(err)
  } else {
    console.log('suscess connect to database')
  }
});





module.exports = connection;
