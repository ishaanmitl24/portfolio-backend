const express = require("express");
const router = express.Router();

const {
  addProjectContoller,
  updateSkillData,
  deleteSkillController,
  getAllProjectsController,
  getSingleProjectController,
} = require("../controllers/project");

router.get("/getSingleProject/:id", getSingleProjectController);

router.get("/getAll", getAllProjectsController);

router.post("/add", addProjectContoller);

router.patch("/update/:id", updateSkillData);

router.delete("/delete/:id", deleteSkillController);

module.exports = router;
