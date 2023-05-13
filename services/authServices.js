const { User } = require('./../models/User');

const { HttpError } = require('./../utils/HttpError');

const signupService = async body => {
  const { email } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw new HttpError(409, 'Email should be unique');
  }

  const newUser = await User.create(body);
  newUser.password = undefined;

  return newUser;
};

module.exports = { signupService };
