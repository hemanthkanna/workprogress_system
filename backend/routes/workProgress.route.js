const express = require('express');
const { assignTaskToEmployee } = require('../controllers/workProgress.controller');

const router = express.Router();

router.post("/", assignTaskToEmployee);

module.exports = router;