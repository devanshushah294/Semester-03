const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const MatchDetails = require("./model/MatchDetails");
mongoose.connect("mongodb://127.0.0.1:27017/Cricket").then(() => {
  const port = 1999;
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get("/", (req, res) => {
    res.send("hello from home!");
  });
  app.get("/matches", async (req, res) => {
    const data = await MatchDetails.find();
    res.send(data);
  });
  app.get("/matches/:id", async (req, res) => {
    const data = await MatchDetails.findOne({ id: req.params.id });
    res.send(data);
  });
  app.post("/matches/addmatch", async (req, res) => {
    const match = new MatchDetails();
    match.id = req.body.id;
    match.Team1Name = req.body.Team1Name;
    match.Team2Name = req.body.Team2Name;
    match.WinnerName = req.body.WinnerName;
    match.MatchDate = req.body.MatchDate;
    match.Team1Image = req.body.Team1Image;
    match.Team2Image = req.body.Team2Image;
    const data = await match.save();
    res.send(data);
  });
  app.put("/matches/update/:id", async (req, res) => {
    const match = await MatchDetails.findOne({ id: req.params.id });

    match.Team1Name = req.body.Team1Name;
    match.Team2Name = req.body.Team2Name;
    match.WinnerName = req.body.WinnerName;
    match.MatchDate = req.body.MatchDate;
    match.Team1Image = req.body.Team1Image;
    match.Team2Image = req.body.Team2Image;
    await match.save();
    res.send(match);
  });

  app.delete("/matches/delete/:id", async (req, res) => {
    const data = await MatchDetails.deleteOne({ id: req.params.id });
    res.send(data);
  });
  app.listen(port, () => {
    console.log("server started @ local host" + port);
  });
});
