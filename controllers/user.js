const UserModel = require("../Models/user");
const {
  ResponseError,
  ResponseSuccess,
} = require("../utils/responseGenerator");

// Get all users
const getAllUsersController = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    if (users) {
      return res.status(200).json(
        ResponseSuccess({
          message: "Users fetched successfully",
          data: users,
        })
      );
    }
    return res
      .status(500)
      .json(ResponseError({ message: "Failed to fetch users" }));
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

// Update user by ID
const updateUserByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      githubLink,
      linkedinLink,
      phoneNumber,
      heading,
      description,
      resumeUrl,
    } = req.body;

    if (
      !id ||
      (!name &&
        !email &&
        !githubLink &&
        !linkedinLink &&
        !phoneNumber &&
        !heading &&
        !description &&
        !resumeUrl)
    ) {
      return res
        .status(400)
        .json(ResponseError({ message: "Missing required fields" }));
    }

    const query = { _id: id };
    const updateDict = {
      $set: {
        ...(name && { name }),
        ...(email && { email }),
        ...(githubLink && { githubLink }),
        ...(linkedinLink && { linkedinLink }),
        ...(phoneNumber && { phoneNumber }),
        ...(heading && { heading }),
        ...(description && { description }),
        ...(resumeUrl && { resumeUrl }),
      },
    };

    const updatedUser = await UserModel.updateOne(query, updateDict);
    const data = await UserModel.findOne(query);
    return res.status(200).json(
      ResponseSuccess({
        message: "User updated successfully",
        data: data,
      })
    );
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

// Add user data
const addUserController = async (req, res, next) => {
  try {
    const {
      name,
      email,
      githubLink,
      linkedinLink,
      phoneNumber,
      heading,
      description,
      resumeUrl,
    } = req.body;

    if (
      !name ||
      !email ||
      !githubLink ||
      !linkedinLink ||
      !phoneNumber ||
      !heading ||
      !description ||
      !resumeUrl
    ) {
      return res
        .status(400)
        .json(ResponseError({ message: "Missing required fields" }));
    }

    const newUser = new UserModel({
      name,
      email,
      githubLink,
      linkedinLink,
      phoneNumber,
      heading,
      description,
      resumeUrl,
    });

    const savedUser = await newUser.save();
    return res.status(201).json(
      ResponseSuccess({
        message: "User added successfully",
        data: savedUser,
      })
    );
  } catch (error) {
    return res.status(500).json(ResponseError({ message: error.message }));
  }
};

module.exports = {
  getAllUsersController,
  updateUserByIdController,
  addUserController,
};
