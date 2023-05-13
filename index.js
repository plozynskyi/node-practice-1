const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');
const { connectDB } = require('./db/connectDB');

const { PORT, MONGO_URI } = process.env;

(async () => {
  try {
    await connectDB(MONGO_URI);

    console.log('Database (MongoDB) connected successfully');

    app.listen(PORT, () => {
      console.log(`server is running on port - ${PORT} `);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();
