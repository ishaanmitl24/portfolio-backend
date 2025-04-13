const express = require("express");
const router = express.Router();

const {
  addSkillContoller,
  updateSkillData,
  deleteSkillController,
  getAllSkillsController,
  getSingleSkillController,
} = require("../controllers/skills");

router.get("/getSingleSkill/:id", getSingleSkillController);

router.get("/getAll", getAllSkillsController);

router.post("/add", addSkillContoller);

router.patch("/update/:id", updateSkillData);

router.delete("/delete/:id", deleteSkillController);

module.exports = router;
