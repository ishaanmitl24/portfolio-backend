const express = require("express");
const router = express.Router();

const {
  getAllUsersController,
  updateUserByIdController,
  addUserController,
} = require("../controllers/user");

router.get("/getAll", getAllUsersController);
router.post("/add", addUserController);
router.patch("/update/:id", updateUserByIdController);

module.exports = router;
