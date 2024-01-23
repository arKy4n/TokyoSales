const express = require('express');
const router = require('router');
const pool = require('../db');

const users = []; // In-memory storage for demo purposes

router.post('/login', async (req, res) => {
  try{
  const sql = "SELECT * FROM users WHERE username = $1 AND password = $2";
  const values = [req.body.username, req.body.password];
  const result = await pool.query(sql, values);
    if (result.rowCount > 0) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch(err){
    console.error("Error during login", err);
    res.status(500).json({ success: false, message: "Internal server error" });  
  }
});

module.exports = router;