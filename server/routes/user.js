const express = require("express");
const {
  UserLogin,
  UserSignUp,
  UserInfo,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/login", UserLogin);
router.put("/signUp", UserSignUp);
router.get("/account", UserInfo);

module.exports = router;
