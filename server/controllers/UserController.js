const e = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const UserLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User(username, password);

    const queryResult = await user.login();
    const DBpassword = queryResult.rows[0].password;
    const DBuserId = queryResult.rows[0].userid;
    let result = false;
    // console.log(DBpassword, DBuserId);
    if (user.password === DBpassword) {
      result = true;
      user.userId = DBuserId;
    }
    if (result) {
      const token = jwt.sign({ ID: DBuserId }, "secretKey", {
        expiresIn: "1h",
      });
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
  console.log("Check3");
  const authHeader = req.headers.authorization;

  const token = authHeader.split(" ")[1];
  console.log(token);
  // if (!token) {
  //   res.status(401).json({ success: false, message: "Invalid user!" });
  // }
  jwt.verify(token, "secretKey", (err, decodedToken) => {
    if (err) {
      res.status(403).json({ success: false, message: "Forbidden access!" });
    }
    req.user = decodedToken;
    console.log(decodedToken);
    const user = new User();
    try {
      const result = user.getAccountInfo(req.user.ID);
      console.log(result);
      res.status(200).json({ success: true, message: "User Information" });
    } catch (err) {
      console.log("Invalid User");
      res.status(500).json({ success: false, message: "No data found" });
    }
  });
};

module.exports = { UserLogin, UserSignUp, UserInfo };
