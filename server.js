const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');

// Establish express connection
const app = express();
app.use(express.static(__dirname + '/'));
app.use(parser.json());

const location = 'mongodb://localhost/recall';
mongoose.connect(location);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

// Routes
require('./server/config/routes.js')(app, express);

const server = app.listen(8080, () => {
  console.log('Listening to 8080')
});

// Establish socket connection with server
const io = require('socket.io')(server);

// File to hold socket logic
require('./server/socket')(io);

module.exports = app;
