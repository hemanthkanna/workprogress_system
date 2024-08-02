const db = require("../models/db.index");
const Task = db.Task;
const Employee = db.Employee;
const WorkProgress = db.WorkProgress;

// Assign a task to an employee and update work progress
exports.assignTaskToEmployee = async (req, res) => {
  try {
    const { taskId, employeeId, progressDate, hoursWorked } = req.body;

    // Check if the task and employee exist
    const task = await Task.findByPk(taskId);
    const employee = await Employee.findByPk(employeeId);

    if (!task || !employee) {
      return res.status(404).json({
        error: "Task or employee not found",
      });
    }

    // console.log(task);
    // console.log(employee);
    // console.log("Request Body : ", req.body);

    // Create or update work progress for the task

    let workProgress = await WorkProgress.findOrCreate({
      where: {
        TaskTaskId: taskId,
        EmployeeEmployeeId: employeeId,
        progressDate,
      },
      defaults: { hoursWorked },
    });

    // const workProgress = await WorkProgress.findOne({
    //   where: {
    //     TaskTaskId : taskId,
    //     EmployeeEmployeeId : employeeId,
    //     progressDate,
    //   },
    // });

    // if (workProgress) {
    //   // Update existing work progress
    //   await workProgress.update({ hoursWorked });
    // } else {
    //   // Create new work progress entry
    //   await WorkProgress.create({
    //     taskId,
    //     employeeId,
    //     progressDate,
    //     hoursWorked,
    //   });
    // }

    res.status(200).json({
      success: true,
      message:
        "Task assigned to employee and work progress updated successfully",
      workProgress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
      errorStack: error.stack,
    });
  }
};
