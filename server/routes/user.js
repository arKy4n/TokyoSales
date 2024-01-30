const express = require("express");
const { UserLogin, UserSignUp } = require("../controllers/UserController");

const router = express.Router();

router.post("/login", UserLogin);
router.put("/signUp", UserSignUp);

module.exports = router;
