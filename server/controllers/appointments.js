let mongoose = require("mongoose");
let Appointment = mongoose.model("Appointment");
let User = mongoose.model("User");

module.exports = {
  // index to test with postman
  index: function(req, res) {
    appointment.find({}, function(err, appointment) {
      if (err) {
        return res.json(err);
      }
      return res.json(appointment);
    });
  },

  // Create a appointment => sends to DB <= newly created appointment
  create: function(req, res) {
    Appointment.create(req.body, function(err, appointment) {
      if (err) {
        return res.json(err);
      }
      return res.json(appointment);
    });
  },


update: function(req, res){
  Appointment.findbyIdAndUpdate(req.params.id, function(err, appointment){
    if (err) {
      return res.json(err);
    }
    return res.json(appointment);
  })
}


showapp(req, res){
    User.find({})
    .populate('user')
    .populate({
      path: 'appointment',
      model: 'Appointment',
      populate: {
        path: 'user',
        model: 'User'
      }
    })

// ********************* sample code *****************************

// .populate ({
//   path: 'answer',
//   model: 'Answer',
//   populate:{
//     path: 'user',
//     model:'User'
//   }
// // })


delete: function(req, res){
  Appointment.findbyIdAndRemove(req.params.id, function(err, appointment){
    if (err) {
      return res.json(err);
    }
    return res.json(appointment);
  })
}


// updateVotes: function(req, res){
//     Appointment.findByIdAndUpdate(req.params.id, {$inc:{answers:{votes:1}}},
//       {new:true}, (err, answer) => {
//           if(err){return res.json(err)}
//           return res.json(appointment);
//     })
// }
