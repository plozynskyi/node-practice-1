const express = require('express');

const {
  getTasks,
  getTask,
  createTask,
  updateTasks,
  deleteTasks,
} = require('../controllers/tasksControllers');

const router = express.Router();

router.route('/').get(getTasks).post(createTask);

router.route('/:taskId').get(getTask).patch(updateTasks).delete(deleteTasks);

module.exports = { tasksRouter: router };
