const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkModel = new mongoose.model(
  "WorkExperience",
  new Schema({
    companyName: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    currentlyWorking: {
      type: Boolean,
      default: false,
    },
    jobType: {
      type: String,
      required: true,
    },
    companyLocation: {
      type: String,
      required: true,
    },
    workingDescription: {
      type: String,
      required: true,
    },
    technologies: {
      type: Schema.Types.Array,
      required: true,
    },
    companyImage: {
      type: String,
      required: true,
    },
    userRole: {
      type: String,
      required: true,
    },
  }),
  "WorkExperience"
);

module.exports = WorkModel;
