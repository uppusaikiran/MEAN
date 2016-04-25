var net = require('net');

var sockets = [];
var s = net.Server(function(socket) {
	sockets.push(socket);

	socket.on('data',function(d) {
		for(var i=0; i<sockets.length; i++){
			if (sockets[i] == socket) continue;
			sockets[i].write(d);
		}
	});

	//Remove when someone disconnects from server
	socket.on('end',function() {
		var i = sockets.indexof(socket);
		sockets.splice(i ,1);
	});
});

s.listen(9000);