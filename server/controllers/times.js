let mongoose = require("mongoose");
let Time = mongoose.model("Time");
let User = mongoose.model("User");

module.exports = {
  // index to test with postman
  index: function(req, res) {
    time.find({}, function(err, time) {
      if (err) {
        return res.json(err);
      }
      return res.json(time);
    });
  },

  // Create a time => sends to DB <= newly created time
  show: function(req, res) {
    Time.findbyId(req.param.id, function(err, time) {
      if (err) {
        return res.json(err);
      }
      return res.json(time);
    });
  }
};
