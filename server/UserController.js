module.exports = {
  retrieveAllFriends: function(req, res, next) {
    console.log(req);
  },
  addNewFriend: function(req, res, next) {
    var friend = {
      nickname: req.body.nickname,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    };
    User.findOne({ nickname: friend.nickname })
      .then(function(user) {
        if (!user) {
          User.create(friend);
          res.sendStatus(201);
        } else {
          console.log('Friend Exists');
          res.sendStatus(200);
        }
      });
  }
};
