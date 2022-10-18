const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Laptop = require("./model/Laptop");
mongoose.connect("mongodb://127.0.0.1:27017/Laptops").then(() => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  const port = 2022;
  app.get("/", (req, res) => {
    res.send("Hello! from home");
  });
  app.get("/laptops", async (req, res) => {
    const data = await Laptop.find();
    res.send(data);
  });
  app.get("/laptop/:id", async (req, res) => {
    const data = await Laptop.findOne({ id: req.params.id });
    res.send(data);
  });
  app.delete("/laptop/delete/:id", async (req, res) => {
    const data = await Laptop.deleteOne({ id: req.params.id });
    res.send(data);
  });
  app.post("/laptop/newLaptop", async (req, res) => {
    const lap = new Laptop();
    lap.laptopName = req.body.name;
    lap.laptopRam = req.body.laptopRam;
    lap.laptopDisplay = req.body.laptopDisplay;
    lap.laptopSize = req.body.laptopSize;
    lap.laptopProcessor = req.body.laptopProcessor;
    lap.id = req.body.id;
    const data = await lap.save();
    res.send(data);
  });
  app.put("/laptop/update/:id", async (req, res) => {
    const lap = await Laptop.findOne({ id: 1 });
    lap.laptopName = req.body.name;
    lap.laptopRam = req.body.laptopRam;
    lap.laptopDisplay = req.body.laptopDisplay;
    lap.laptopSize = req.body.laptopSize;
    lap.laptopProcessor = req.body.laptopProcessor;
    lap.id = req.body.id;
    const data = await lap.save();
    res.send(data);
  });
  app.listen(port, () => {
    console.log("server started @ local host: " + port);
  });
});
