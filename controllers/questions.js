const Question = require("../db/models/Question");

async function handleQuestionsdata(req, res) {
    const body = req.body;
    const Questions= await Question.find({});
    return res.status(200).json(Questions);
  }

  module.exports={
    handleQuestionsdata
}