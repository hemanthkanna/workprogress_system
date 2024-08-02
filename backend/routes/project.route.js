const express = require("express");
const {
  createProject,
  findAllProject,
  findOneProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");
const router = express.Router();

router.post("/", createProject);
router.get("/", findAllProject);
router.get("/:id", findOneProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
