// install packages
// npm i
//  How to use it
//  How to print result of it

var figlet = require("figlet");

figlet("Sheryians", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
