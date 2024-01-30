const express = require('express');
const router = express.Router();
const {testUserLogin, testUserSignUP} = require('../controllers/UserController');

router.post('/login',testUserLogin);
router.put('/signUp',testUserSignUP);


module.exports = router;