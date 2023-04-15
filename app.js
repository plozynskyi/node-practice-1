const express = require('express');
const { tasksRouter } = require('./routes/tasksRouter');
const { errorHandler } = require('./middlewares/errorHandler');
const { notFoundHandler } = require('./middlewares/notFoundHandler');

const app = express();

app.use(express.json());
app.use('/tasks', tasksRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
