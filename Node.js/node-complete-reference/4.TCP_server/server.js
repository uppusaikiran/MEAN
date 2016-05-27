var net = require('net');

var server = net.createServer(function(socket){
  console.log("Connection from"+ socket.remoteAddress);
  socket.end("Hello Node\n");
});

server.listen(3000 , "127.0.0.1");
