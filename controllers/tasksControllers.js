const {
  getTasksService,
  getTaskService,
  createTasksService,
  updateTasksService,
  deleteTasksService,
} = require('../services/tasksServices');

const { catchAsync } = require('../utils/catchAsync');

let getTasks = async (req, res) => {
  const tasks = await getTasksService();
  res.status(200).json(tasks);
};

getTasks = catchAsync(getTasks);

const getTask = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const task = await getTaskService(taskId);
  res.status(200).json(task);
});

const createTask = async (req, res) => {
  const createdTask = await createTasksService(req.body);
  res.status(201).json(createdTask);
};

const updateTasks = async (req, res) => {
  const { taskId } = req.params;
  const updatedTask = await updateTasksService(taskId, req.body);
  res.status(200).json(updatedTask);
};

let deleteTasks = async (req, res) => {
  const { taskId } = req.params;
  const deletedTaskId = await deleteTasksService(taskId);
  res.status(200).json({ id: taskId });
};

deleteTasks = catchAsync(deleteTasks);

module.exports = {
  getTasks,
  getTask,
  createTask: catchAsync(createTask),
  updateTasks,
  deleteTasks,
};
