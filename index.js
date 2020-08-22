var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require("path");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});
