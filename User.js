var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

// SCHEMA
var userSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  // password: String,
  moderator: { type: Boolean, default: false }
});

// MODEL
var User = mongoose.model("User", userSchema);

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
      }
  mongoo.connection.close();
    })
})

