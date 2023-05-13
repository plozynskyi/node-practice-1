const { catchAsync } = require('../utils/catchAsync');

const { signupService, loginService } = require('./../services/authServices');

let signup = async (req, res) => {
  const user = await signupService(req.body);
  res.status(201).json(user);
};

signup = catchAsync(signup);

let login = async (req, res) => {
  const { user, accessToken } = await loginService(req.body);
  res.status(200).json({ user, token: accessToken });
};

login = catchAsync(login);

let logout = async (req, res) => {};

logout = catchAsync(logout);

module.exports = { signup, login, logout };
