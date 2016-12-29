const mongoose = require('mongoose');

var FriendDetail = new mongoose.Schema({
    phone: {type: String },
    email: { type: String },
    birthday: { type: Date }
},
{
  timestamps: true
});

module.exports = mongoose.model('FriendDetail', FriendDetail);
