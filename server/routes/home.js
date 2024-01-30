const express = require("express");

const router = express.Router();

// Sample route: GET
router.get("", (req, res) => {
  res.json({ message: "Backend is running" });
});

module.exports = router;
