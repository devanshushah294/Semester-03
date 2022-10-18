const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student = require("./model/Student");
mongoose.connect("mongodb://127.0.0.1:27017/Colleges").then(() => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  const port = 3003;
  app.get("/", (req, res) => {
    res.send("hello from home");
  });
  app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.send(data);
  });
  app.get("/student/:id", async (req, res) => {
    const data = await Student.findOne({ EnrollmentNo: req.params.id });
    res.send(data);
  });
  app.delete("/student/delete/:id", async (req, res) => {
    const data = await Student.deleteOne({ EnrollmentNo: req.params.id });
    res.send(data);
  });
  app.post("/student/newStudent", async (req, res) => {
    const stu = new Student();
    stu.Name = req.body.Name;
    stu.EnrollmentNo = req.body.EnrollmentNo;
    stu.CPI = req.body.CPI;
    stu.Branch = req.body.Branch;
    stu.Sem = req.body.Sem;
    const data = await stu.save();
    res.send(data);
  });
  app.put("/student/update/:id", async (req, res) => {
    const stu = await Student.findOne({ EnrollmentNo: req.params.id });
    stu.Name = req.body.Name;
    stu.EnrollmentNo = req.body.EnrollmentNo;
    stu.CPI = req.body.CPI;
    stu.Branch = req.body.Branch;
    stu.Sem = req.body.Sem;
    await stu.save();
    res.send(stu);
  });
  app.listen(port, () => {
    console.log("Server started @ " + port);
  });
});
