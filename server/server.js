const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User Route
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

// Product Route
const productRoutes = require("./routes/product");
app.use("/product", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
