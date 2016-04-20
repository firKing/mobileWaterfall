var express = require('express');
var router = express.Router();

var data = require('../model/data').data;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.send(data);
});

module.exports = router;
