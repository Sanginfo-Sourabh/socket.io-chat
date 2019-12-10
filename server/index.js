var express = require('express')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Channel server is listening on
// All clients can publish
var public_channel = "channel_public";

io.on('connection', function(socket){
  socket.on(public_channel, function(message){
    if (message.to && message.from) {
      io.emit("channel_" + message.to, message);
    }
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
