const express = require('express');
// const pool = require('../db');

const router = express.Router();

// Sample route: GET
router.get('', (req, res) => {
    res.json({ message: 'Backend is running' });
});

module.exports = router;