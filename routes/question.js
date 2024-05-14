const express = require("express");
const router = express.Router();
const { handleQuestionsdata } = require("../controllers/questions");

router.get("/getquestions", handleQuestionsdata);

module.exports = router;
