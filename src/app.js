const express = require('express');
const config = require('./config/default');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect to DB
connectDB();

app.use(express.json({ extended: false }));

const buildPath = path.join(__dirname, "client/build");
app.use(express.static(buildPath));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(buildPath));
// }

// Define Routes
app.use('/api/url', require('./routes/router'));
app.use('/', require('./routes/router'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT}`));