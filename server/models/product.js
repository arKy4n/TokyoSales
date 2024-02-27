const pool = require("../config/db");

class Product {
  constructor(productId, productName, productDescription, imagePath) {
    this.productId = productId;
    this.productName = productName;
    this.productDescription = productDescription;
    this.imagePath = imagePath;
  }

  Upload() {
    const sql =
      "INSERT into products (productname, description, image_path) VALUES ($1, $2, $3)";
    const values = [this.productName, this.description, this.imagePath];
    pool.query(sql, values);
  }

  static Fetch() {
    const sql = "Select * FROM products";
    const result = pool.query(sql);
    return result;
  }
}

module.exports = Product;
