const { string } = require('joi');
const { Schema, model } = require('mongoose');

const schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refresh_token: String,
});

const User = model('user', schema);

module.exports = { User };
