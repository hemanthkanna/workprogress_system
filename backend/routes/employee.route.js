const employees = require("../controllers/employee.controller");
const express = require('express');
const router = express.Router();

router.post("/", employees.create);
router.get("/" , employees.findAll);
router.get("/:id", employees.findOne);
router.put("/:id", employees.update);
router.route("/:id").delete(employees.delete);

module.exports = router;

