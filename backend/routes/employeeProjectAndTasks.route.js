const express = require('express');
const { getEmployeeProjectsAndTasks } = require('../controllers/employeeProjectAndTasks.controller');
const router = express.Router();

router.get("/projects-tasks/:id", getEmployeeProjectsAndTasks);

module.exports = router;