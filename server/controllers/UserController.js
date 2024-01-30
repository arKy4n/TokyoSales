const e = require("express");
const User = require("../models/user");

const UserLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User(username, password);

    const result = await user.login();
    if (result > 0) {
      res.status(200).json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Login failed" });
    }
  } catch (err) {
    console.error("Error during login", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const UserSignUp = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User(username, password, email);

    console.log(username, password, email);

    await user.signUp();
    console.log("Check1");
    const result = await user.login();
    console.log("Check");
    if (result > 0) {
      res.status(200).json({ success: true, message: "SignUp successful" });
    } else {
      res.status(401).json({ success: false, message: "SignUp failed" });
    }
  } catch (err) {
    console.error("Error during SignUp");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { UserLogin, UserSignUp };
