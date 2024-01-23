const express = require('express');
const router = require('router');
const pool = require('../db');

const users = []; // In-memory storage for demo purposes

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;