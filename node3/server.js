// requires and variables
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var port = 3000;
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
//  routes
app.get('/', function(req, res) {
  res.sendFile('form.html', {root: './public'});
});
app.get('/success', function(req, res) {
  res.sendFile('success.html', {root: './public'});
});
app.post('/formsubmit', function(req, res) {
  res.redirect('/success');
});
// creating server and listening
app.listen(port, function(err) {
  if (err) console.log('Shit!');
  console.log('Server running on port: ' + port);
});
