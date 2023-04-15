const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  completed: Joi.boolean(),
});

const updateTaskSchema = Joi.object()
  .keys({
    title: createTaskSchema.extract('title').optional(),
    completed: createTaskSchema.extract('completed').optional(),
  })
  .or('title', 'completed');

module.exports = { createTaskSchema, updateTaskSchema };
