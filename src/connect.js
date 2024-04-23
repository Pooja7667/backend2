const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://kpk79046:subscribers123@cluster0.qorp2oi.mongodb.net/?retryWrites=true&w=majority";

// Define an asynchronous function to connect to MongoDB
const DBconnect = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("no connection");
  }
};

module.exports = DBconnect;
