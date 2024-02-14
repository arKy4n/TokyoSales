const express = require('express');
const router = express.Router();
const multer = require('multer');
const { UploadImage } = require('../controllers/ProductController');
console.log('check1')
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'C:\\Users\\Bhavan\\Desktop\\DevelopmentProjects\\TokyoSales\\server\\ImageUploads')
    },
    filename: function (req,file,cb){
        console.log('here')
        const uniqueFilename = `${Date.now()}-${file.originalname}`;
        cb(null,uniqueFilename);
    }
});

const upload = multer({storage:storage, limits: { fieldSize: 10 * 1024 * 1024 }});

router.post('/upload',upload.single('image'),UploadImage);

module.exports = router;
