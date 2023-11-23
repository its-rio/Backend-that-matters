// Dynamic routing OR Route parameter (: => colon)
const express = require("express");
const app = express();

// Middleware
app.use(function(req, res, next){
    console.log("Hello middleware");
    next()
});

// creating routes with express
app.get("/", function (req, res) {
  res.send("Hello to Home route");
});

app.get("/profile", function (req, res) {
  res.send("Hello from Profile section");
});
// route parameter
app.get("/profile/:username", function (req, res) {
    res.send(`Hello from ${req.params.username}`);
  });

app.listen(3000);
