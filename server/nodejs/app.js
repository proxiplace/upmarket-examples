const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const upmarketRouter = require('./routes/upmarket.router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/', upmarketRouter);

module.exports = app;
