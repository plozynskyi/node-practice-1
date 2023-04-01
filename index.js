const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`server is running on port - ${PORT} `);
});
