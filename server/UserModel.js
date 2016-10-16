const mongoose = require('mongoose');

var User = new mongoose.Schema({
  friends: [{
    nickname: {type: String },
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: Number },
    email: { type: String },
    birthday: { type: Date }
  }]
},
{
  timestamps: true
});

module.exports = mongoose.model('User', User);
