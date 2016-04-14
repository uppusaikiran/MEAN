var app = require('http').createServer()
var io = require('socket.io')(app)

app.listen(8000)

io.on('connection',function(socket){
	socket.emit('alert','hello from server')
})