const { catchAsync } = require('../utils/catchAsync');

let signup = async (req, res) => {};

signup = catchAsync(signup);

let login = async (req, res) => {};

login = catchAsync(login);

let logout = async (req, res) => {};

logout = catchAsync(logout);

module.exports = { signup, login, logout };
