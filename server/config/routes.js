const userController = require('../UserController');

module.exports = function(app, express) {
  app.route('/api/friends/')
    .get(userController.retrieveAllFriends)
    .post(userController.addNewFriend);

  app.get('/api/friends/', userController.retrieveAllFriends);
  app.post('/api/friends/', userController.addNewFriend);
  
};
