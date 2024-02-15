const pool = require("../config/db");

class Product {
  constructor(productId, productName, productDescription, imagePath) {
    this.productId = productId;
    this.productName = productName;
    this.productDescription = productDescription;
    this.imagePath;
  }

  async Upload() {
    const sql =
      "INSERT into products (productname, description, image_path) VALUES ($1, $2, $3)";
    const values = [this.productName, this.description, this.image_path];
    await pool.query(sql, values);
  }

  async Fetch() {
    const sql = "Select * FROM products";
    const result = await pool.query(sql);
    return result;
  }
}

module.exports = Product;
