const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/todo.controller");

// CREATE
router.post("/createTask", createTask);

// GET ALL
router.get("/getAllTasks", getAllTasks);

// GET SINGLE
router.get("/getTask/:id", getSingleTask);

// UPDATE
router.put("/updateTask/:id", updateTask);

// DELETE
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
