class Order {
  constructor(orderId, userId, orderDate, totalAmount) {
    this.orderId = orderId;
    this.userId = userId;
    this.orderDate = orderDate;
    this.totalAmount = totalAmount;
  }
}

module.exports = Order;
