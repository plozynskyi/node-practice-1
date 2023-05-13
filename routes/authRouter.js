const { Router } = require('express');

const { signup, login, logout } = require('./../controllers/authControllers');

const { validateBody } = require('../utils/validateBody');

const {
  createUserValidationSchema,
  loginValidationSchema,
} = require('./../utils/validation/userValidationShemas');

const router = Router();

router.post('/signup', validateBody(createUserValidationSchema), signup);
router.post('/login', validateBody(loginValidationSchema), login);
router.post('/logout', logout);

module.exports = { authRouter: router };
