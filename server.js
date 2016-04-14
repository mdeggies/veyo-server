'use strict';

var express = require('express'),
cors = require('cors'), app = express();
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api'));

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(err.status || 500);
  console.log('Error:', err);
});

module.exports = app;
