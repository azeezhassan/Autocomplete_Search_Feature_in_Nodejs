var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./database');
var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/search', function(req, res) {
    db.query('SELECT country_name FROM countries WHERE country_name LIKE "%' + req.query.term + '%"',
    function(err, rows, fields) {
        if (err) throw err;
        var data = [];
        for (i = 0; i < rows.length; i++) {
        data.push(rows[i].country_name);
        }
        res.end(JSON.stringify(data));
    });
});
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function() {
console.log('Node app is running on port 8080');
});
module.exports = app;