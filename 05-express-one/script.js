// All About express JS 
const express = require("express");
const app = express();

// Middleware
app.use(function(req, res, next){
    console.log("Hello middleware");
    next()
});

app.use(function(req, res, next){
    console.log("Hello middleware 2");
    next()
});

// creating routes with express
app.get("/", function (req, res) {
  res.send("This is the first route");
});

app.get("/profile", function (req, res) {
  res.send("Hello from Profile section");
});

app.listen(3000);
