var express = require("express");
var app = express();
var path = require('path');
var animalRouter = require('./controller/animalController.js');

app.use(express.static(__dirname + '/../client/build'));

var path = require('path');
var getAllAnimals = require("./db/db_facts.js");
var getAllQuiz = require("./db/db_quiz.js");

app.get("/api/quiz", function(req, res){
  getAllQuiz(function(data){
    res.json(data);
  })
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.use("/api/animals", animalRouter);

app.listen(80, function() {
  console.log("it worked");
});
