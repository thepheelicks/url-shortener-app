const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: { 
    type: String,
    required: true
  },
  original: { 
    type: String,
    required: true
  },
  short: { 
    type: String,
    required: true
  },
  date: { 
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model('url', urlSchema);