const mongoose = require('mongoose');
const config = require('./default');

const mongoDB = config.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = connectDB;