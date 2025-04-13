const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectMONGODB = async (callback) => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully");
    callback()
  } catch (err) {
    console.log(JSON.stringify(err?.stack, null, 2));
  }
};

module.exports = connectMONGODB;
