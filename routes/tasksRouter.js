const express = require('express');

const {
  getTasks,
  getTask,
  createTask,
  updateTasks,
  deleteTasks,
} = require('../controllers/tasksControllers');

const { validateBody } = require('../utils/validateBody');
const {
  createTaskSchema,
  updateTaskSchema,
} = require('../utils/validation/tasksValidationSchemas');

const { catchAsync } = require('../utils/catchAsync');

const router = express.Router();

router
  .route('/')
  .get(getTasks)
  .post(validateBody(createTaskSchema), createTask);

router
  .route('/:taskId')
  .get(getTask)
  .patch(validateBody(updateTaskSchema), catchAsync(updateTasks))
  .delete(deleteTasks);

module.exports = { tasksRouter: router };
