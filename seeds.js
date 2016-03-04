var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

var User = require('./models/User'),
    Thread = require('./models/Thread');

Thread.remove({}, function(err, thread) {
  User.remove({}, function(err, results){
    User.create([
      {name: "John Marshall",             email: "jm@email.com", moderator: true},
      {name: "Oliver Wendell Holmes Jr.", email: "ow@email.com"},
      {name: "Thurgood Marshall",         email: "tm@email.com"},
      {name: "Sandra Day O'Connor",       email: "sd@email.com"}
      ], function(err, users){
        if (err) {
          console.log(err);
        } else {
          console.log(users);
          var john = users[0];
        }

        // create threads

        Thread.create(
          {name: "YOLO", creator: john},
          function(err, thread) {
            if (err) console.log(err);
            console.log(thread);
        mongoose.connection.close();
        })
      });
  });
})
