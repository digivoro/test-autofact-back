const express = require("express");
const { authUser } = require("../middlewares/auth");

const app = express();

// User login
app.post("/login", [authUser], (req, res) => {
  console.log("POST /login");
  console.log("Body:", req.body);

  const { user, auth, type } = req.body;

  if (auth.status) {
    res.status(200).json({
      user,
      type,
    });
  } else {
    res.status(404).json({
      message: "User or password does not exist",
    });
  }
});

module.exports = app;
