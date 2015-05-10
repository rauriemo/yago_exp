var express = require('express');
var app = express();

/* GET home page. */
app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports = app;
