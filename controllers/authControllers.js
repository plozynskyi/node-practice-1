const { catchAsync } = require('../utils/catchAsync');

const { signupService } = require('./../services/authServices');

let signup = async (req, res) => {
  const user = await signupService(req.body);
  res.status(201).json(user);
};

signup = catchAsync(signup);

let login = async (req, res) => {};

login = catchAsync(login);

let logout = async (req, res) => {};

logout = catchAsync(logout);

module.exports = { signup, login, logout };
