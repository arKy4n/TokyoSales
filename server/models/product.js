class Product {
    constructor(ProductID,ProductName,Description, Price, Quantity){
        this.ProductID=ProductID;
        this.ProductName=ProductName;
        this.Description=Description;
        this.Price=Price;
        this.Quantity=Quantity;
    }
}

module.exports = Product;