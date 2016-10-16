const User = require('./userModel');
const Q = require('q');

const findUser = Q.nbind(User.findOne, User);
const createUser = Q.nbind(User.create, User);

module.exports = {
  retrieveAllFriends: function(req, res, next) {
    console.log(req.body);
  },

  addNewFriend: function(req, res, next) {
    var friend = {
      nickname: req.body.nickname,
      firstname: req.body.nickname.split(' ')[0],
      lastname: req.body.nickname.split(' ')[1]
    };
    findUser({ nickname: friend.nickname })
      .then(function(user) {
        if (!user) {
          return createUser(friend);
          res.sendStatus(201);
        } else {
          console.log('Friend Exists');
          res.sendStatus(200);
        }
      });
  }
};
