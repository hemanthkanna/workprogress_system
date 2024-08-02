const tests = require("../controllers/test.controller");
const express = require("express");
const router = express.Router();

// Create a new test
router.post("/", tests.create);
router.get("/", tests.findAll);
router.get("/:id", tests.findOne);
router.put("/:id", tests.update);
router.delete("/:id",tests.delete);

module.exports = router; // Export the router
