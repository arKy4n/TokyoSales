const e = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { generateToken, verifyPassword } = require("../utils/utilities");

const UserLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User(username, password);

    const queryResult = await user.login();
    const { password: DBpassword, userid: DBuserId } = queryResult.rows[0];

    if (verifyPassword(user.password, DBpassword)) {
      const token = generateToken(DBuserId);
      // console.log("Genrate token: ", token);
      res
        .status(200)
        .json({ success: true, message: "Login successful", token: token });
    } else {
      res.status(401).json({ success: false, message: "Login failed" });
    }
  } catch (err) {
    console.log("Error during login", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const UserSignUp = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User(username, password, email);

    // console.log(username, password, email);

    await user.signUp();

    const result = await user.login();

    if (result > 0) {
      res.status(200).json({ success: true, message: "SignUp successful" });
    } else {
      res.status(401).json({ success: false, message: "SignUp failed" });
    }
  } catch (err) {
    console.log("Error during SignUp");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
const UserInfo = async (req, res) => {
  // console.log("Check3");

  const user = new User();
  user.userId = req.user.Id;
  const result = await user.getAccountInfo();
  console.log(result.rows[0]);
  try {
    res.status(200).json({
      success: true,
      message: "User Information",
      userData: result.rows[0],
    });
  } catch (err) {
    console.log("Invalid User");
    res.status(500).json({ success: false, message: "No data found" });
  }
};

module.exports = { UserLogin, UserSignUp, UserInfo };
