var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var calcModule = require('../modules/calc_module');
var portDecision = process.env.PORT || 3000;

// spin server
app.listen(portDecision, function () {
  console.log('listening on port 3000');
}); // end listen

app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); // end get base

app.post('/calculation', function (req, res) {
  console.log('calculation url hit');
  res.send('a calculation');

  // var fromCalculateNum = calculateNum();
  // console.log(fromCalculateNum);
});

app.post('/summation', urlencodedParser, function (req, res) {
  // console.log('post - log hit:', req.body);
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var ops = req.body.ops;
  var mathStuff = calcModule(num1, num2, ops);
  var sendCalculation = {
    calc: mathStuff,
  };
  res.send(sendCalculation);
}); // end post

// static server resource for public
app.use(express.static('public'));
