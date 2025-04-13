const WorkModel = require("../Models/work");
const {
  ResponseError,
  ResponseSuccess,
} = require("../utils/responseGenerator");

const getSingleWorkController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json(ResponseError({ message: "Missing ID" }));
    }
    const query = {
      _id: id,
    };
    const work = await WorkModel.findOne(query);
    if (work) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Work experience fetched successfully",
          data: work,
        })
      );
    }
    return res.status(404).json(ResponseError({ message: "Work experience not found" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

const getAllWorkController = async (req, res, next) => {
  try {
    const workExperiences = await WorkModel.find();
    if (workExperiences) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Work experiences fetched successfully",
          data: workExperiences,
        })
      );
    }
    return res.status(500).json(ResponseError({ message: "Failed to fetch work experiences" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

const addWorkController = async (req, res, next) => {
  try {
    const {
      companyName,
      startDate,
      endDate,
      currentlyWorking,
      jobType,
      companyLocation,
      workingDescription,
      technologies,
      companyImage,
      userRole,
    } = req?.body;
    if (
      !companyName ||
      !startDate ||
      !endDate ||
      !jobType ||
      !companyLocation ||
      !workingDescription ||
      !technologies ||
      !companyImage ||
      !userRole
    ) {
      return res.status(400).json(ResponseError({ message: "Missing field" }));
    }
    const work = new WorkModel({
      companyName,
      startDate,
      endDate,
      currentlyWorking,
      jobType,
      companyLocation,
      workingDescription,
      technologies,
      companyImage,
      userRole,
    });
    const savedWork = await work.save();
    if (savedWork) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Work experience added successfully",
          data: savedWork,
        })
      );
    }
    return res.status(500).json(ResponseError({ message: "Failed to add work experience" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

const updateWorkController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      companyName,
      startDate,
      endDate,
      currentlyWorking,
      jobType,
      companyLocation,
      workingDescription,
      technologies,
      companyImage,
      userRole,
    } = req.body;
    if (
      !companyName ||
      !startDate ||
      !endDate ||
      !jobType ||
      !companyLocation ||
      !workingDescription ||
      !technologies ||
      !companyImage ||
      !userRole
    ) {
      return res.status(400).json(ResponseError({ message: "Missing field" }));
    }
    const query = {
      _id: id,
    };
    const getDataById = await WorkModel.findOne(query);
    if (!getDataById) {
      return res.status(404).json(ResponseError({ message: "Work experience not found" }));
    }
    const updateDict = {
      $set: {
        companyName,
        startDate,
        endDate,
        currentlyWorking,
        jobType,
        companyLocation,
        workingDescription,
        technologies,
        companyImage,
        userRole,
      },
    };
    const result = await WorkModel.updateOne(query, updateDict);
    if (result) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Work experience updated successfully",
          data: result,
        })
      );
    }
    return res.status(500).json(ResponseError({ message: "Failed to update work experience" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

const deleteWorkController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json(ResponseError({ message: "Missing ID" }));
    }
    const query = {
      _id: id,
    };
    const deleteWork = await WorkModel.deleteOne(query);
    if (deleteWork) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Work experience deleted successfully",
        })
      );
    }
    return res.status(500).json(ResponseError({ message: "Failed to delete work experience" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

module.exports = {
  addWorkController,
  updateWorkController,
  deleteWorkController,
  getAllWorkController,
  getSingleWorkController,
};