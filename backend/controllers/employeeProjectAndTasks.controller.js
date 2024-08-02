const db = require("../models/db.index");
const Employee = db.Employee;
const Project = db.Project;
const Task = db.Task;

exports.getEmployeeProjectsAndTasks = async (req, res) => {
  try {
    const employeeId = req.params.id;

    //Find the Employee
    const employee = await Employee.findByPk(employeeId, {
      include: [
        {
          model: Task,
          include: Project,
        },
      ],
    });

    console.log(employee);
    console.log(employeeId);

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    //Group Tasks by Project
    const projectWithTasks = {};
    employee.Tasks.forEach((task) => {
      const projectName = task.Project.projectName;
      if (!projectWithTasks[projectName]) {
        projectWithTasks[projectName] = [];
      }
      projectWithTasks[projectName].push({
        TaskId: task.taskId,
        TaskStatus: task.taskStatus,
        HoursWorked: task.hoursWorked,
        Deadline: task.deadline,
      });
    });

    res.status(200).json({
      employeeId: employee.employeeId,
      employeeName: employee.employeeName,
      projects: projectWithTasks,
    });
  } catch (error) {
    console.error("Error fetching employee projects and tasks", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
