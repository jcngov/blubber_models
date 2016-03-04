var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

var User = require('./models/User'),
    Thread = require('./models/Thread');

Thread.find({}, function(err, threads){
  if (err) {
    console.log (err);
  } else {
    console.log(threads);
  }
  mongoose.connection.close();
});


