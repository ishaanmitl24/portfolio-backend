const SkillModel = require("../Models/skills");
const {
  ResponseError,
  ResponseSuccess,
} = require("../utils/responseGenerator");

const getAllSkillsController = async (req, res, next) => {
  const skills = await SkillModel.find();
  if (skills) {
    return res.status(200).json(
      ResponseSuccess({
        message: "Skills fetched successfully",
        data: skills,
      })
    );
  }
  return res.status(500).json(ResponseError({ message: "Failed to fetch" }));
};


const addSkillContoller = async (req, res, next) => {
  const { name, imageUrl } = req?.body;
  if (!name || !imageUrl) {
    return res
      .status(400)
      .json(ResponseError({ message: "Name and imageUrl are required" }));
  }
  const skill = new SkillModel({
    name,
    imageUrl,
  });
  const savedSkill = await skill.save();
  if (savedSkill) {
    return res.status(200).json(
      ResponseSuccess({
        message: "Skill added successfully",
        data: savedSkill,
      })
    );
  }
  return res
    .status(500)
    .json(ResponseError({ message: "Failed to add skill" }));
};

const updateSkillData = async (req, res, next) => {
  const { id } = req.params;
  const { imageUrl } = req.body;
  if (!id || !imageUrl) {
    return res.status(400).json(ResponseError({ message: "Missing Filed" }));
  }
  const query = {
    _id: id,
  };
  const getDataById = await SkillModel.findOne(query);
  if (!getDataById) {
    return res.status(404).json(ResponseError({ message: "Skill not found" }));
  }
  const updateDict = {
    $set: {
      imageUrl,
    },
  };
  const result = await SkillModel.updateOne(query, updateDict);
  if (result) {
    return res.status(200).json(
      ResponseSuccess({
        message: "Skill updated successfully",
        data: result,
      })
    );
  }
  return res.status(500).json(ResponseError({ message: "Failed to update" }));
};

const deleteSkillController = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json(ResponseError({ message: "Missing ID" }));
  }
  const query = {
    _id: id,
  };
  const deleteSkill = await SkillModel.deleteOne(query);
  if (deleteSkill) {
    return res.status(200).json(
      ResponseSuccess({
        message: "Skill deleted successfully",
      })
    );
  }
  return res.status(500).json(ResponseError({ message: "Failed to delete" }));
};

module.exports = {
  addSkillContoller,
  updateSkillData,
  deleteSkillController,
  getAllSkillsController
};
