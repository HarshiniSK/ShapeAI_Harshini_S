const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var kg = Number(req.body.kg);
  var m = Number(req.body.m);
  res.send("The BMI calculated is: " + String(kg / (m * m)));
});

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
