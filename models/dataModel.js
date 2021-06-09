const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  last: {
    type: String,
    required: true,
    trim: true,
  },
  buy: {
    type: String,
    required: true,
    trim: true,
  },
  sell: {
    type: String,
    required: true,
    trim: true,
  },
  volume: {
    type: String,
    required: true,
    trim: true,
  },
  base_unit: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Data", dataSchema);
