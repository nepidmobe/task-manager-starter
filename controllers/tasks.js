const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    const error = new Error("NOT FOUND!");
    error.status = 404;
    console.log("re");
    return next(createCustomError("Task not found", 404));
    // return res.status(404).json({ msg: "Task not found" });
  }
  res.status(200).json(task);
});

const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const { name, completed } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: taskId },
    { name: name, completed: completed },
    { new: true, runValidators: true }
  );
  if (!task) {
    return next(createCustomError("Task not found", 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError("Task not found", 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
