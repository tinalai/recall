const friends = {};

function addFriend(data) {
  console.log(data)
  if (!friends[data]) {
    friends[data] = [];
  } else {
    console.log('This friend already exists');
  }
  console.log(friends)
}

function addMessage(friend, message) {
  if (friends[friend]) {
    friends[friend].push(message);
    console.log(friends)
  }
}

// Refactor - send automated messages by getting size of friends object
// setInterval(function() {
//   if(Object.keys(friends).length) {
//     for (var friend of friends ) {
//       console.log(friend)
//     addMessage(Math.floor(Math.random() * Object.keys(friends).length) + 1, 'Server sayz hi')
//     }
//   } 
// }, 3000);

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('addFriend', (data) => {
        addFriend(data);
        io.emit('addedFriend', Object.keys(friends));
    });

    socket.on('addMessage', (friend, data) => {
      addMessage(friend, data);
      io.emit('newMessage', friends)
    });

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  });
};
