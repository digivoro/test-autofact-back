const express = require("express");
const { verifyDate } = require("../middlewares/date");

const app = express();

// User quiz
app.post("/quiz", [verifyDate], (req, res) => {
  console.log("POST /quiz");
  console.log("Body:", req.body);

  const { report, correct, rating } = req.body;
  res.status(200).json({ report, correct, rating });
});

module.exports = app;
