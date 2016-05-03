//imports
var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

//listener
server.listen(3000);

//routes default
app.get('/',function (req,res) {
	res.sendFile(__dirname+'/index.html');
});

//receive the message
io.sockets.on('connection',function (socket) {
	socket.on('send message',function(data) {
		//and send it to all other users
		io.sockets.emit('new message',data);
		//if we use the below command it sends to all user excpet me
		// socket.broacast.emit('new-mesage',data);

	});
});

