var express = require('express');
var path = require('path');
var logger = require('morgan');

var upmarketRouter = require('./routes/upmarket.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', upmarketRouter);

module.exports = app;
