const express = require("express");
const app = express();
const hostnumber = 3000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/ab?cd", (req, res) => {
  console.log(res.params);
  res.send("hello from ab?cd");
});
app.listen(hostnumber, () => {
  console.log(`Server started @ ${hostnumber}`);
});
