const express = require("express");
const {
  UserLogin,
  UserSignUp,
  UserInfo,
} = require("../controllers/UserController");
const { verifyToken } = require("../utils/utilities");

const router = express.Router();

router.post("/login", UserLogin);
router.put("/signUp", UserSignUp);
router.get("/account", verifyToken, UserInfo);

module.exports = router;
