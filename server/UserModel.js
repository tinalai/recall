const mongoose = require('mongoose');

var User = new mongoose.Schema({
    nickname: {type: String },
    firstname: { type: String },
    lastname: { type: String }
},
{
  timestamps: true
});

module.exports = mongoose.model('User', User);
