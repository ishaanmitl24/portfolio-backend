const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectModel = new mongoose.model(
  "Project",
  new Schema({
    projectName: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: String,
      required: true,
    },
    demoImage: {
      type: String,
      required: true,
    },
  }),
  "Project"
);

module.exports = projectModel;
