var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var getResults = { header: { login: "root", password: "123456" }, locations: [], destinations: [] };

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/:login/:password', function (req, res) {
  var login = req.params.login
  var password = req.params.password

  if (login == getResults.header.login && password == getResults.header.password) {
    // OK
    res.status(200).send(getResults);
  } else {
    // Pas bon compte
    res.status(404).send("No user found for login: " + login + " and password: " + password);
  }
})

app.post('/location/:login/:password', function (req, res) {
  var login = req.params.login
  var password = req.params.password

  if (login == getResults.header.login && password == getResults.header.password) {
    // OK
    getResults.locations.push(req.body);
    res.status(200).send(getResults);
  } else {
    // Pas bon compte
    res.status(404).send("No user found for login: " + login + " and password: " + password);
  }
})

app.post('/destination/:login/:password', function (req, res) {
  var login = req.params.login
  var password = req.params.password

  if (login == getResults.header.login && password == getResults.header.password) {
    getResults.destinations.push(req.body);
    res.status(200).send(getResults);
  } else {
    res.status(404).send("No user found for login: " + login + " and password: " + password);
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
