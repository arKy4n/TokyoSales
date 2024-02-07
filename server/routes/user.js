const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { verifyToken } = require('../utils/Auth');


router.post('/login', UserController.testUserLogin);
router.post('/signUp',UserController.testUserSignUp);
console.log("reached");
router.get('/userdata',verifyToken, UserController.getuserData);


module.exports = router;