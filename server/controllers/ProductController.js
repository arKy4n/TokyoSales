const fs = require("fs");
const path = require("path");

const Product = require("../models/product");
const { STORAGE_DIR } = require("../config/auth");

const UploadProduct = async (req, res) => {
  const { name, description } = req.body;
  const imageBuffer = req.file.buffer;

  const fileName = `${Date.now()}-${req.file.originalname}`;
  const filePath = path.join(STORAGE_DIR, fileName);
  fs.writeFileSync(filePath, imageBuffer);

  const product = new Product();
  product.productName = name;
  product.description = description;
  product.image_path = filePath;

  console.log(product.productName, product.description);
  //   product.productName = name;
  //   product.description = description;
  await product.Upload();

  try {
    res.status(200).json({
      success: true,
      message: "Product uploaded successfully",
    });
  } catch (err) {
    console.err("Error during Uploading the product", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { UploadProduct };
