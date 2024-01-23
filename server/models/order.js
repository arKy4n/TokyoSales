class order {
  constructor(orderID, CustomerID, Products, TotalPrice, OrderStatus) {
    this.orderID = orderID;
    this.CustomerID = CustomerID;
    this.Products = Products;
    this.TotalPrice = TotalPrice;
    this.OrderStatus = OrderStatus;
  }
}

module.exports = order;