const db = require("../models/db.index");
const Employee = db.Employee;

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  try {
    //Create a employee
    const data = {
      employeeId: req.body.employeeId,
      employeeName: req.body.employeeName,
      employeeEmail: req.body.employeeEmail,
      employeeMobile: req.body.employeeMobile,
      employeeRole: req.body.employeeRole,
      employeeSalary: req.body.employeeSalary,
    };

    const employee = await Employee.create(data);

    res.status(200).json({
      success: true,
      employee: employee,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Some error occured while creating the employee.",
    });
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const employees = await Employee.findAll();

    if (employees.length <= 0) {
      return res.status(404).json({
        success: false,
        message: "No employee Data Present!",
      });
    } else {
      res.status(200).json({
        success: true,
        employees: employees,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "some error occurred while retriving employee data",
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.findByPk(id);

    if (!employee) {
      res.status(404).json({
        success: false,
        message: `Cannot find employee with the ID ${id}`,
      });
    } else {
      res.status(200).json({
        success: true,
        employee: employee,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error Retrieving employee with ID ${id}`,
      error: error.message,
      errStack: error.stack,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.update(req.body, {
      where: { employeeId: id },
    });

    if (!employee) {
      res.status(404).json({
        success: false,
        message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Employee Updated Successfully",
        employee: employee,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error updating Employee with ID ${id}`,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.destroy({
      where: { employeeId: id },
    });

    if (!employee) {
      res.status(404).json({
        success: false,
        message: `Cannot delete Employee with id=${id}. Maybe Employee was not found or req.body is empty!`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Employee Deleted Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error deleting Employee with ID ${id}`,
      error: error.message,
      errStack: error.stack,
    });
  }
};
