const bcrypt = require('bcrypt');

const { User } = require('./../models/User');

const { HttpError } = require('./../utils/HttpError');

const { createTokens } = require('./../utils/createTokens');

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

const loginService = async body => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new HttpError(401, 'Not authorized');
  }

  const isPasswordCorrect = bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new HttpError(401, 'Not authorized');
  }

  const { accessToken, refreshToken } = createTokens({ userId: user._id });

  await User.findByIdAndUpdate(user._id, { refresh_token: refreshToken });

  return { user, accessToken };
};

module.exports = { signupService, loginService };
