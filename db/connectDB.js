const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("You connected succesfully to the database!");
  } catch (error) {
    console.log(error);
    console.log("Connection Error", error.message);
  }
};

module.exports = connectDB;
