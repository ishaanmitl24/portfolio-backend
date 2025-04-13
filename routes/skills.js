const express = require("express");
const router = express.Router();

const SkillModel = require("../Models/skills");
const {
  addSkillContoller,
  updateSkillData,
  deleteSkillController,
  getAllSkillsController,
} = require("../controllers/skills");

router.get("/getAll", getAllSkillsController);

router.post("/add", addSkillContoller);

router.patch("/update/:id", updateSkillData);

router.delete("/delete/:id", deleteSkillController);

module.exports = router;
