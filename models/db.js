const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

connection.on('error', function(err) {
    console.log("[mysql error]",err);
  });


// connection.connect(error => {
//     if(error) throw error, 
//     console.log("Successfully connected to the database")
// })


module.exports = connection;