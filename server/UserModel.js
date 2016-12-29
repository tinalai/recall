const mongoose = require('mongoose');
const FriendDetail = require('./FriendModel');

var User = new mongoose.Schema({
    nickname: {type: String },
    firstname: { type: String },
    lastname: { type: String },
    // details: [FriendDetail],
},
{
  timestamps: true
});

module.exports = mongoose.model('User', User);
