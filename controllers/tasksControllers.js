const {
  getTasksService,
  getTaskService,
  createTasksService,
  updateTasksService,
  deleteTasksService,
} = require('../services/tasksServices');

const getTasks = async (req, res, next) => {
  try {
    const tasks = await getTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const task = await getTaskService(taskId);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const createdTask = await createTasksService(req.body);
    res.status(201).json(createdTask);
  } catch (error) {
    next(error);
  }
};

const updateTasks = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const updatedTask = await updateTasksService(taskId, req.body);
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTasks = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const deletedTaskId = await deleteTasksService(taskId);
    res.status(200).json({ id: taskId });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTasks, getTask, createTask, updateTasks, deleteTasks };
