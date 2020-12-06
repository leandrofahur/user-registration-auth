const mongoose = require("mongoose");
const config = require("config");

const uri = config.get("mongoURI");

const connectdb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(-1);
  }
};

module.exports = connectdb;
