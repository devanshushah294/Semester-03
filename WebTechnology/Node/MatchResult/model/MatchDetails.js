const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: Number,
  Team1Name: String,
  Team2Name: String,
  WinnerName: String,
  MatchDate: String,
  Team1Image: String,
  Team2Image: String,
});
module.exports = mongoose.model("Match", schema);
