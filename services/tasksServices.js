const { Task } = require('./../models/Task');

const getTasksService = async (page, limit) => {
  const skip = (page - 1) * limit;
  const task = await Task.find().skip(skip).limit(limit);
  return task;
};

const getTaskService = async taskId => {
  const result = await Task.findOne({ _id: taskId });
  return result || null;
};

const createTasksService = async ({ title, completed }) => {
  const task = new Task({ title, completed });
  await task.save();
  return task;
};

const updateTasksService = async (taskId, { title, completed }) => {
  const updateTask = await Task.findOneAndUpdate(
    { _id: taskId },
    {
      $set: { title, completed },
    },
    { new: true }
  );
  return updateTask || null;
};

const deleteTasksService = async taskId => {
  const removeTask = await Task.findByIdAndDelete({
    _id: taskId,
  });
  return removeTask || null;
};

module.exports = {
  getTasksService,
  getTaskService,
  createTasksService,
  updateTasksService,
  deleteTasksService,
};
