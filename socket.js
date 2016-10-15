const friends = {};
const friendIndex = [];

function addFriend(data) {
  console.log(data)
  if (!friends[data]) {
    friends[data] = [];
    friendIndex.push(data);
  } else {
    console.log('This friend already exists');
  }
  console.log(friends);
  console.log(friendIndex);
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
      io.emit('newMessage', friends);

      // Server sends message to client
      setInterval(function() {
          if (friendIndex.length) {
            var index = Math.floor(Math.random() * friendIndex.length);
            addMessage(friendIndex[index], 'Server sayz hi')
          }
        socket.emit('newMessage', friends);
      }, 15000)
    });

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  });
};
