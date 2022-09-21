const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Devanshu Shah");
});
app.listen(3000, () => {
  console.log("server started at 127.0.0.1:3000/");
});
