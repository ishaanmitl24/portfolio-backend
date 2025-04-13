const express = require("express");
const router = express.Router();

const {
  addWorkController,
  updateWorkController,
  deleteWorkController,
  getAllWorkController,
  getSingleWorkController,
} = require("../controllers/work");

router.get("/getSingleWork/:id", getSingleWorkController);

router.get("/getAll", getAllWorkController);

router.post("/add", addWorkController);

router.patch("/update/:id", updateWorkController);

router.delete("/delete/:id", deleteWorkController);

module.exports = router;