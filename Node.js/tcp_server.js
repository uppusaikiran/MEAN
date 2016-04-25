var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('hello\n');
	socket.write('world\n');

	//echo back the data received
	socket.on('data',function(data) {
		socket.write(data);
	});
});

server.listen(8000);