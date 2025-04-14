const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new mongoose.model(
  "User",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    githubLink:{
      type: String,
      required: true,
    },
    linkedinLink:{
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    heading:{
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    resumeUrl: {
      type: String,
      required: true,
    },
  }),
  "User"
);

module.exports = user;
