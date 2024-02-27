const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const STORAGE_DIR = require("./config/auth");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Testing server
// app.use(express.static("Storage"));
app.get("/test", (req, res) => {
  res.json({ message: "Hello from API!" });
});

// User Route
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

// Product Route
const productRoutes = require("./routes/product");
app.use("/product", productRoutes);

app.get("/uploads/:filename", (req, res) => {
  res.sendFile(req.params.filename, { root: path.join(__dirname, "/Storage") });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
