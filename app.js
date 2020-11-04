const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server now running at Port 3000.");
});
