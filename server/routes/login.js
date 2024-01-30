const express = require("express");
const UserLogin = require("../controllers/UserController");

const router = express.Router();

router.post("/login", UserLogin);

module.exports = router;
