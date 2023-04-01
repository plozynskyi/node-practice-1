const express = require('express');
const { tasksRouter } = require('./routes/tasksRouter');
const { errorHandler } = require('./middleware/middleware');

const app = express();

app.use(express.json());
app.use('/tasks', tasksRouter);

app.use(errorHandler);

module.exports = app;
