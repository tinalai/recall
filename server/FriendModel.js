const mongoose = require('mongoose');

var FriendDetail = new mongoose.Schema({
    phone: {type: String },
    email: { type: String },
    birthday: { type: Data }
},
{
  timestamps: true
});

module.exports = mongoose.model('FriendDetail', FriendDetail);
