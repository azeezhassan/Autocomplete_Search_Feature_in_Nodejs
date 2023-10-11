var mysql = require('mysql');
var conn = mysql.createConnection({
host: 'localhost', // Replace with your host name
user: 'root',      // Replace with your database username
password: 'P@ssw0rd',      // Replace with your database password
database: 'my_nodejs_db' // // Replace with your database Name
}); 
conn.connect(function(err) {
if (err) throw err;
console.log('Database is connected successfully !');
});
module.exports = conn;