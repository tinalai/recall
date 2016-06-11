const express = require('express');

// Establish express connection
const app = express();
app.use(express.static(__dirname + '/'));

const server = app.listen(8080, () => {
  console.log('Listening to 8080...')
});

// Establish socket connection with server
const io = require('socket.io')(server);

// File to hold socket logic
require('./socket')(io);
