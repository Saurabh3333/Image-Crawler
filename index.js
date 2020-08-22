var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require("path");
var fs = require("fs");
const del = require('del');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'crawl-result')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/crawler', (req, res) => {
    res.sendFile(__dirname + '/crawl-result.html');
});

app.post('/crawler', (req, res) => {
    console.log('URL: '+req.body.crawl_url);
    res.redirect("/crawler");
  });

  app.post('/delete', (req, res) => {
    console.log("Deleting previous results.....");
    del.sync(['crawl-result/**', '!public/assets', '!public/assets/goat.png']);
    console.log("Previous results deleted");
    res.redirect("/");
  });

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});
