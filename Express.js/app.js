var express = require('express');
var path =require('path');
var bodyParser = require('body-parser');


var app = express();


//configure app

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//use middleware

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));

//define routes
var todoItems = [
			{id :1, desc:'foo'},
			{id :2, desc:'bar'},
			{id :3, desc:'baz'},

		];

app.get('/',function (req ,res) {
	// res.send('Hello express\n');
	res.render('index',{
		title : 'MyApp',
		items: todoItems
	});
});

app.post('/add',function  (req ,res) {
	var newItem = req.body.newItem;
	todoItems.push({
		id : todoItems.length+1,
		desc : newItem
	});

	res.redirect('/');
	
});

app.listen(1337,function() { 
	
	console.log('Ready on port 1337');
});































// var http = require('http');
// http.createServer(function(req,res) {
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('Hello World\n');
// }).listen(1337,'127.0.0.1');
// console.log('Server running at http://127.0.0.1:1377/');