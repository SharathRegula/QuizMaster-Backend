const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(
    "mongodb+srv://sharathregula28:Dimpu123@cluster1.ajrnfbq.mongodb.net/QuizMaster",
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log("MongoDB Connection Error", err));

module.exports = connectDB;
