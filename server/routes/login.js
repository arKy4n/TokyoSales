const express = require("express");

// For Database connection
const pool = require("../config/db");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const sql = "SELECT * FROM users WHERE username = $1 AND password = $2";
    const values = [req.body.username, req.body.password];
    const result = await pool.query(sql, values);
    if (result.rowCount > 0) {
      res.status(200).json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Login failed" });
    }
  } catch (err) {
    console.error("Error during login", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
