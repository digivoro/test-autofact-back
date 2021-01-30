const db = require("../db/Users.json");

const authUser = (req, res, next) => {
  const { user, pass } = req.body;
  let foundUser = db.find(u => u.user == user);
  if (foundUser) {
    if (foundUser.pass === pass) {
      req.body.auth = {
        status: true,
        message: "Authenticated",
      };
      req.body.type = foundUser.type;
      return next();
    } else {
      req.body.auth = {
        status: false,
        message: "Password does not match",
      };
      return next();
    }
  } else {
    req.body.auth = {
      status: false,
      message: "User not found",
    };
    return next();
  }
};

module.exports = {
  authUser,
};
