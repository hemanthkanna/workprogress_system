const express = require('express');
const { createTask } = require('../controllers/task.controller');
const router = express.Router();

router.post("/", createTask);

module.exports = router;