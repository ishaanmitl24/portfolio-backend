const mongoose = require("mongoose");
const { Schema } = mongoose;

const Skills = new mongoose.model(
  "Skills",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  }),
  "Skills"
);

module.exports = Skills;
