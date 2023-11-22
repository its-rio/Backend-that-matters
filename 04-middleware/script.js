const express = require("express");
const app = express();

// Middleware method
app.use(function (req, res, next) {
  console.log("Hello from middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("Hello from middleware2");
  next();
});

// Express Routing
app.get("/", function (req, res) {
  res.send("Hello to learning backend");
});

app.get("/profile", function (req, res) {
  res.send("Hello from Profile section");
});

app.listen(3000);
