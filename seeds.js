var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

var User = require('./models/User'),
    Thread = require('./models/Thread');

Thread.remove({}, function(err, threads) {
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
          // console.log(users);
          var john = users[0];
          var thur = users[2];
        }

        // create threads

        Thread.create([
          {name: "YOLO", creator: john, creatorName: john.name},
          {name: "Think Different", creator: thur, creatorName: thur.name}
          ],
          function(err, threads) {
            if (err) console.log(err);
            console.log(threads);

            // add some posts

            var yolo = threads[0];

            yolo.posts.push({
              author: john,
              title: "Marbury vs. Madison",
              body: "Ya diggg?"
            });

            yolo.posts.push({
              author: thur,
              title: "Brown v BoE",
              body: "Right? Yeah."
            });

            yolo.save(function(err, yolo){
              console.log(err);
              console.log(yolo);

              // ADD COMMENTS
              var post = yolo.posts[0];

              post.comments.push({
                author: thur,
                body: "first comment!"
              })

              yolo.save(function(err, results) {
                console.log(err);
                console.log(results);
                mongoose.connection.close();
              })
            });
        })
      });
  });
})
