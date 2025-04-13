const ProjectModel = require("../Models/projects");
const {
  ResponseError,
  ResponseSuccess,
} = require("../utils/responseGenerator");

const getSingleProjectController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json(ResponseError({ message: "Missing ID" }));
    }
    const query = {
      _id: id,
    };
    const project = await ProjectModel.findOne(query);
    if (project) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Project fetched successfully",
          data: project,
        })
      );
    }
    return res.status(404).json(ResponseError({ message: "Project not found" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

const getAllProjectsController = async (req, res, next) => {
  try {
    const projects = await ProjectModel.find();
    if (projects) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Projects fetched successfully",
          data: projects,
        })
      );
    }
    return res.status(500).json(ResponseError({ message: "Failed to fetch" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

const addProjectContoller = async (req, res, next) => {
  try {
    const {
      projectName,
      githubLink,
      liveLink,
      description,
      technologies,
      demoImage,
    } = req?.body;
    if (
      !projectName ||
      !githubLink ||
      !liveLink ||
      !description ||
      !technologies ||
      !demoImage
    ) {
      return res.status(400).json(ResponseError({ message: "Missing field" }));
    }
    const project = new ProjectModel({
      projectName,
      githubLink,
      liveLink,
      description,
      technologies,
      demoImage,
    });
    const savedProject = await project.save();
    if (savedProject) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Project added successfully",
          data: savedProject,
        })
      );
    }
    return res
      .status(500)
      .json(ResponseError({ message: "Failed to add project" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

const updateSkillData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      projectName,
      githubLink,
      liveLink,
      description,
      technologies,
      demoImage,
    } = req.body;
    if (
      !projectName ||
      !githubLink ||
      !liveLink ||
      !description ||
      !technologies ||
      !demoImage
    ) {
      return res.status(400).json(ResponseError({ message: "Missing field" }));
    }
    const query = {
      _id: id,
    };
    const getDataById = await ProjectModel.findOne(query);
    if (!getDataById) {
      return res
        .status(404)
        .json(ResponseError({ message: "Project not found" }));
    }
    const updateDict = {
      $set: {
        projectName,
        githubLink,
        liveLink,
        description,
        technologies,
        demoImage,
      },
    };
    const result = await ProjectModel.updateOne(query, updateDict);
    if (result) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Project updated successfully",
          data: result,
        })
      );
    }
    return res.status(500).json(ResponseError({ message: "Failed to update" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

const deleteSkillController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json(ResponseError({ message: "Missing ID" }));
    }
    const query = {
      _id: id,
    };
    const deleteProject = await ProjectModel.deleteOne(query);
    if (deleteProject) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Project deleted successfully",
        })
      );
    }
    return res.status(500).json(ResponseError({ message: "Failed to delete" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

module.exports = {
  addProjectContoller,
  updateSkillData,
  deleteSkillController,
  getAllProjectsController,
  getSingleProjectController,
};