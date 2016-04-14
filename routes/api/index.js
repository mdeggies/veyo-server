'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('in router.get /');
});

router.post('/', function(req, res, next) {
	res.send('in router.post /');
});

module.exports = router;
