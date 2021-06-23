const express = require('express');
const config = require('./config/default');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/url', require('./routes/router'));
app.use('/', require('./routes/router'));

const PORT = config.port;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));