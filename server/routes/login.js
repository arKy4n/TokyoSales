const express = require('express');
const router = require('router');

const users = []; // In-memory storage for demo purposes

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username == username && u.password ==password);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;