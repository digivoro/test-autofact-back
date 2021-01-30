const db = require("../db/Users.json");

const verifyDate = (req, res, next) => {
  const { user } = req.body;
  let foundUser = db.find(u => u.user == user);

  const today = new Date();
  const lastForm = new Date(foundUser.lastForm);
  const MES = 30 * 24 * 60 * 60 * 1000;

  if (today - lastForm >= MES) {
    console.log(lastForm);
    return next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  verifyDate,
};
