// dependencies 
var express = require('express');
var expressLayout = require('express-ejs-layouts');
var app = express();
var port = 3000;

// ejs/express layouts
app.set('view engine', 'ejs');
app.use(expressLayout);

// routing
var router = require('./app/routes');
app.use('/', router);

// static files location setting
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));

// start
app.listen(port);