const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/connectDB");

const questionRouter = require("./routes/question");

const app = express();
app.use(
  cors({
    origin:
      "https://b770e8ce-3526-4311-8c37-5f211060b1d9-00-n0wudzuc5dh0.spock.replit.dev/",
  }),
);
const port = process.env.PORT || 8001;
connectDB;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.urlencoded({ extended: false }));

app.use("/api", questionRouter);
