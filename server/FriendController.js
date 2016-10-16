const FriendDetails = require('./FriendModel');
const User = require('./UserModel');
const Q = require('q');

const findUser = Q.nbind(User.findOne, User);
const createUser = Q.nbind(User.create, User);
const addDetails = Q.nbind(FriendDetails.create, Friend);

module.exports = {
  addNewDetail: function(req, res, next) {
    console.log(req.body)
    var details = {
      phone: req.body.phone || ' '
      email: req.body.email || ' ';
      birthday: req.body.birthday || ' ';
    };
    findUser({ nickname: req.body.nickname })
      .then(function(user) {
        if (user) {
          return addDetails(details);
          res.sendStatus(201);
        }
    });
  }
};
