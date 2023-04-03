const express = require('express');
const logger = require('morgan');
const cors = require("cors");


const booksRouter = require('./routes/Books');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/books', booksRouter);

module.exports = app;