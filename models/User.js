const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

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

schema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hash(this.password, 12);
  next();
});

const User = model('user', schema);

module.exports = { User };
