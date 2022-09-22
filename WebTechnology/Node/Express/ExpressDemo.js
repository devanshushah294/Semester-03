const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from home page");
});
app.get("/about", (req, res) => {
  res.send("hello from about page");
});
app.listen(3000, () => {
  console.log("server started @ 3000");
});
