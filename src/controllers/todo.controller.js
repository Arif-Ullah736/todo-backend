const Task = require("../models/task.model");
const ApiError = require("../utils/ApiError");

// CREATE Task
exports.createTask = async (req, res, next) => {
  try {
    const { description, completed } = req.body;

    const task = await Task.create({
      description,
      completed,
    });

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// GET All Tasks
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();

    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

// GET Single Task
exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      throw new ApiError(404, "Task not found");
    }

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE Task
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      throw new ApiError(404, "Task not found");
    }

    await task.update(req.body);

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE Task
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      throw new ApiError(404, "Task not found");
    }

    await task.destroy();

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
