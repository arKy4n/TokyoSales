const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// User User Route
const userRoutes = require("./routes/login");
app.use("/user", userRoutes);

// Route for Home Page
const homeRoutes = require("./routes/home");
app.use("/home", homeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
