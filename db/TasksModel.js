const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title for task'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Task = model('task', taskSchema);

module.exports = { Task };
