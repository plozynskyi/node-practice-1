const Joi = require('joi');

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;

const createUserValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordPattern).required().messages({
    'string.pattern.base':
      'Password should contain minimum eight characters, at least one letter and one number.',
  }),
});

const loginValidationSchema = Joi.object().keys({
  email: createUserValidationSchema.extract('email'),
  password: createUserValidationSchema.extract('password'),
});

module.exports = { createUserValidationSchema, loginValidationSchema };
