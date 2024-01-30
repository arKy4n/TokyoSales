const User = require("../models/user");

const UserLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User(username, password);

    const result = await user.login();
    if (result > 0) {
      res.status(200).json({ success: true, message: "Login successful" });
      // res.redirect("/home");
    } else {
      res.status(401).json({ success: false, message: "Login failed" });
    }
  } catch (err) {
    console.error("Error during login", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = UserLogin;
