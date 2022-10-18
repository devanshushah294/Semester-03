const express = require("express");
const mongoose = require("mongoose");
const Faculty = require("./model/Faculty");
const bodyParser = require("body-parser");
const cors = require("cors");
mongoose.connect("connectionStringHere").then(() => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.get("/faculties", async (req, res) => {
    const data = await Faculty.find();
    res.send(data);
  });

  app.get("/faculty/:id", async (req, res) => {
    const data = await Faculty.findOne({ FacultyInitial: req.params.id });
    res.send(data);
  });

  app.post("/faculty", async (req, res) => {
    const fac = new Faculty();
    fac.FacultyInitial = req.body.FI;
    fac.FacultyName = req.body.FN;
    fac.FacultyAge = req.body.FA;
    const data = await fac.save();
    res.send(data);
  });

  app.put("/faculty/:id", async (req, res) => {
    const data = await Faculty.findOne({ FacultyInitial: req.params.id });
    data.FacultyName = req.body.FN;
    data.FacultyAge = req.body.FA;

    await data.save();
    res.send(data);
  });

  app.delete("/faculty/:id", async (req, res) => {
    const data = await Faculty.deleteOne({ FacultyInitial: req.params.id });
    res.send(data);
  });

  app.listen(3003, () => {
    console.log("Server started at @ 3003");
  });
});
