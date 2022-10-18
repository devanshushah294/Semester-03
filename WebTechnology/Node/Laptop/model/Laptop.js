const mongoose = require("mongoose");

const schema = mongoose.Schema({
  laptopName: String,
  laptopRam: Number,
  laptopDisplay: String,
  laptopSize: String,
  laptopProcessor: String,
  id: Number,
});
module.exports = mongoose.model("laptops", schema);
