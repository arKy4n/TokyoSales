const express = require("express");
const multer = require("multer");

const { UploadProduct } = require("../controllers/ProductController");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), UploadProduct);

module.exports = router;
