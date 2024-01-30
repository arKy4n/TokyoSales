const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// User Login Route
const loginRoutes = require('./routes/user');
app.use('/user', loginRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});