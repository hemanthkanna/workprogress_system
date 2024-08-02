const db = require("../models/db.index");
const Project = db.Project;

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { projectName, deadline } = req.body;
    const project = await Project.create({ projectName, deadline });

    res.status(200).json({
      success: true,
      project: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error Creating Project",
    });
  }
};

// Get all Project
exports.findAllProject = async (req, res) => {
  try {
    const projects = await Project.findAll();

    if (projects.length <= 0) {
      return res.status(404).json({
        success: false,
        message: "No Project Data Present!",
      });
    } else {
      res.status(200).json({
        success: true,
        projects: projects,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message || "some error occurred while retriving project data",
    });
  }
};

// Find Particular Project
exports.findOneProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findByPk(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Cannot find the project with ID ${projectId}`,
      });
    } else {
      res.status(200).json({
        success: true,
        project,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error Retriving Project with ID ${projectId}`,
      error: error.message,
    });
  }
};

// Update Project
exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.update(req.body, {
      where: { projectId: projectId },
    });

    if (!project) {
      return res.ststus(404).json({
        success: false,
        message: `Cannot update Project with ID =${projectId}. Maybe Project was not found or req.body is empty!`,
      });
    } else {
      res.status(200).json({
        success: true,
        project,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || `Error updating Project with given ID`,
    });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findByPk(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Cannot delete Project with ID = ${projectId}. Maybe Project was not found or req.body is empty!`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `Project Deleted Successfully`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error deleting Project with this ID `,
      error  : error.message,
      errorStack : error.stack
    });
  }
};
