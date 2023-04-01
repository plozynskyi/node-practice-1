const fs = require('fs/promises');
const crypto = require('crypto');

const { HttpError } = require('../utils/HttpError');

const path = require('path');

const db = path.join(process.cwd(), 'db', 'tasks.json');

const getTasksService = async () => {
  const rawData = await fs.readFile(db);
  const parsDate = JSON.parse(rawData);
  return parsDate;
};

const getTaskService = async taskId => {
  const tasks = await getTasksService();
  const task = tasks.find(task => String(task.taskId) === String(taskId));
  if (!task) {
    throw new HttpError(404, 'this task does not exist');
  }
  return task;
};

const createTasksService = async ({ title, completed }) => {
  const tasks = await getTasksService();
  const newTask = {
    id: crypto.randomUUID(),
    title: title,
    completed: completed,
  };
  tasks.push(newTask);
  await fs.writeFile(db, JSON.stringify(tasks, null, 2));
  return newTask;
};

const updateTasksService = async (taskId, { title, completed }) => {
  const tasks = await getTasksService();
  const task = tasks.find(task => String(task.id) === String(taskId));
  task.title = title;
  task.completed = completed;
  await fs.writeFile(db, JSON.stringify(tasks, null, 2));
  if (!task) {
    throw new HttpError(404, 'this task does not exist');
  }
  return task;
};

const deleteTasksService = async taskId => {
  const tasks = await getTasksService();
  const filteredTasks = tasks.filter(
    task => String(task.id) !== String(taskId)
  );
  await fs.writeFile(db, JSON.stringify(filteredTasks, null, 2));
  if (tasks.length === filteredTasks.length) {
    throw new HttpError(404, 'this task does not exist');
  }
  return taskId;
};

module.exports = {
  getTasksService,
  getTaskService,
  createTasksService,
  updateTasksService,
  deleteTasksService,
};
