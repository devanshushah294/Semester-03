const mongoose = require("mongoose");

const schema = mongoose.Schema({
  Name: String,
  EnrollmentNo: String,
  CPI: Number,
  Branch: String,
  Sem: Number,
});
module.exports = mongoose.model("Student", schema);
