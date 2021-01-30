const express = require("express");
const login = require("./login");
const quiz = require("./quiz");

const app = express();

// Server routes
app.use(login);
app.use(quiz);

module.exports = app;
