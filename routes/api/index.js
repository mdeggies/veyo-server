'use strict';

var fs = require('fs')
var express = require('express');
var router = express.Router();

const FILEPATH = './data/data.json';

router.get('/data', function(req, res, next) {
	fs.readFile(FILEPATH, function (err, data) {
		if (err) throw err;
		res.send(JSON.parse(data));
	});
});

router.post('/data', function(req, res, next) {
	var data = req.body;
	fs.writeFile(FILEPATH, JSON.stringify(data), function (err) {
		if (err) throw err;
	});
	res.end();
});

router.get('/data/:id', function(req, res, next) {
	var id = req.params.id-1;
	fs.readFile(FILEPATH, function (err, data) {
		if (err) throw err;
		var data = JSON.parse(data);
		res.send(data[id]);
	});
});

router.delete('/data/:id', function(req, res, next) {
	var id = req.params.id-1;
	fs.readFile(FILEPATH, function (err, data) {
		if (err) throw err;
		var data = JSON.parse(data);
		data.splice(id, 1);
		fs.writeFile(FILEPATH, JSON.stringify(data), function (err) {
			if (err) throw err;
		});
	});
	res.end();
});

module.exports = router;
