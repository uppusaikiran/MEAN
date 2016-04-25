
setInterval(function() {
	console.log("world");
},5000);

var http =require('http');
setInterval(function() {
	console.log("fetching google.com");

	http.get({host: 'google.com'},function(res) {
		console.log(res.headers);
	});
},2000);

console.log("hello");


var http = require('http');
var s = http.createServer(function(req,res) {
	res.writeHead(200,{'content-type' : 'text/plain'});
	res.end("Hello World\n");
});

s.listen(8000);

  