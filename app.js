const express = require('express');

const { errorHandler } = require('./middlewares/errorHandler');
const { notFoundHandler } = require('./middlewares/notFoundHandler');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use('/', router);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
