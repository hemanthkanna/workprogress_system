const db = require("../models/db.index");
const Task = db.Task;
const Project = db.Project;
const Employee = db.Employee;

//Create a new task and assign it to an employee

exports.createTask = async (req, res) => {
  try {
    const { taskDescription, taskStatus, deadline, ProjectProjectId, assignedToEmployeeId } =
      req.body;
    const task = await Task.create({
      taskDescription,
      taskStatus,
      deadline,
      ProjectProjectId,
      assignedToEmployeeId,
    });

    res.status(200).json({
      success: true,
      task: task,
    });
  } catch (error) {
    res.status(500).json({
      success : false,
      message : error.message || "Error Creating Task",
    });
  }
};
