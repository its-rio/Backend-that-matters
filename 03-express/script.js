//  Express js  => npm i express
// Features =>  Robust routing  (GET, POST etc.)

// npm i nodemon => Package to restart the server automatically
// npx nodemon .\script.js => to run the file & if give error add 'npx' at satart


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello to learning backend')
})

app.get('/profile', function (req, res) {
    res.send('Hello from Profile section')
  })

  app.get('/contact', function (req, res) {
    res.send('Contact us for more queries')
  })

app.listen(3000)