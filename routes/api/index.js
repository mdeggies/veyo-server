'use strict';

var fs = require('fs')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log('inside router.get /');
	res.send('in router.get /');
});

router.post('/', function(req, res, next) {
	console.log('inside router.post /');
	res.send('in router.post /');
});

module.exports = router;
