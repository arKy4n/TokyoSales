const pool =require('../db');


class Product {
    constructor(ProductID,ProductName,Description, Price, Quantity){
        this.ProductID=ProductID;
        this.ProductName=ProductName;
        this.Description=Description;
        this.Price=Price;
        this.Quantity=Quantity;
        this.ProductUserId=ProductUserId;
    }

    async getProduct(){
        const sql = "SELECT * FROM products";
        const result= await pool.query(sql);

    }
    async postProduct(){


    }

    
}

module.exports = Product;