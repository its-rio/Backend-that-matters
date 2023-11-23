            // WE CAN DONE ALL THESE WITH script2.js BUT FOR UNDERSTANDING I CREATE NEW FILE 
// static files setup karne ke liye:

//  1) create a folder called public
//  2) create three folders inside it, images, stylesheets javascripts
//  3) configure the express static in script.js file
//  4) understand the path

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(('./public')))   //setup the path

// creating routes with express
app.get("/", function (req, res) {
    res.render("index", {age:12, name: "Geneliya deshmukh"});
  });

app.get("/error", function (req, res, next) {
    throw error("Something went wrong")
  });
  
app.get("/contact", function (req, res) {
    res.render("contact", {text: "Jhandu Team"});
});

//  Error Handler 
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })
  app.listen(3000);