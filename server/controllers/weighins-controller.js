var Weighin = require('../models/weighin');

module.exports.create = function(req, res) {
  var  weighin = new Weighin(req.body);
  weighin.save(function(err, result) {
    res.json(result);
  });
};

module.exports.list = function(req, res) {
  Weighin.find({}, function(err, results) {
    res.json(results);
  })
};