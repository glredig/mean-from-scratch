var mongoose = require('mongoose');

module.exports = mongoose.model('Weighin', {
  value: Number,
  updatedAt: Date
});