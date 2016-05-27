var http = require('http');

var server = http.createServer(function(req , res){
  res.writeHead(200 , {"Content-type": "text/plain"});
  res.end("Hello Node\n");
});

server.listen(3000);
