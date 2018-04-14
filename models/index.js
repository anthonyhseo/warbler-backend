const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect(process.env.MONGODB_SERVER, {
  keepAlive: true
});

module.exports.User = require('./user');
module.exports.Message = require('./message');

