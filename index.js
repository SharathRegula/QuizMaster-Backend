const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connectDB");

const questionRouter = require("./routes/question");

const app = express();
const port = process.env.PORT || 8000;
connectDB;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.urlencoded({ extended: false }));

app.use("/api/question", questionRouter);