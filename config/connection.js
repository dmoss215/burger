var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "testuser",
    password: "Hello123",
    database: "burgers_db"
});

// Make the connection

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;