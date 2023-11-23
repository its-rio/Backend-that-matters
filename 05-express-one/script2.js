// template engines => ejs => one markups style later on convert into html =>  HTML with superpowers
// ejs setup karne ke liye

//  1) ejs install
// npm i ejs

// 2) configure ejs
// app.set("view engine", "ejs");

// 3) ek views folder banao
// 4) usmein ejs files banao
// 5) send ki jagah render karo

const express = require("express");
const app = express();

app.set("view engine", "ejs");

// creating routes with express
app.get("/", function (req, res) {
  res.render("index", {age:12, name: "Geneliya deshmukh"});
});

app.get("/contact", function (req, res) {
    res.render("contact", {text: "Jhandu Team"});
  });

app.listen(3000);