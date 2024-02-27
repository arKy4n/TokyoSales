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
  product.imagePath = filePath;

  // console.log(product.productName, product.description);
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

const DisplayProduct = async (req, res) => {
  const displayProduct = await Product.Fetch();
  // console.log("displayProduct: ", displayProduct);
  console.log("rows: ", displayProduct.rows);
  try {
    // console.log("CHECK");
    res.status(200).json({
      success: true,
      message: "Product displayed successfully",
      productData: displayProduct.rows,
    });
  } catch (err) {
    console.log("Error during displaying the product", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { UploadProduct, DisplayProduct };
