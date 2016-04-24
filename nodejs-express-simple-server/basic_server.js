var db, http, onRequest ,portnum, restFunc ,returncode;

// db = require('db');
// db.init();

portnum =3000;

//rest function goes here

onRequest =function	(req , res) {
	var bodyStr ='';
	//function is called for each chunck of data received
	req.on('data',function(chunck) {
		bodyStr += chunck.toString();
	});

	//function is called when all the data has been received
	//request has been sent now build respons	
	req.on('end',function() {
		var argArray ,buflen ,contenttype ,outobj ,outputStr,recid;
		
		outputStr = "Hello World<br>\n";
		outputStr +="method:" +req.method +"\n";
		outputStr += "Posted data is: " + bodyStr + "\n";

		//rheaders goes here
		returncode =200;
		contenttype ='text/html';
		//url parse goes here
		urlparse = require('url');

		url = urlparse.parse(req.url , true);
		urlparse = url.pathname;

		outputStr += "URL pathname:" +urlpathname + "\n";

		argArray = urlpathname.split('/');
		outputStr += "URL split array:" +JSON.stringify(argArray) + ""
		
		tablename = argArray[1];
		recid =argArray[2];
		outputStr += "tablename:" +tablename+ "\n";
		outputStr += "record id:" +recid + "\n";
		//rest function call goes here
		
		buflen = Buffer.byteLenght(outputStr ,'utf8');

		res.writeHead(returncode,{
			'Connection' : 'close',
			'Content-Type' : contenttype +"; charser=utf-8",
			'Content-Lenght' : buflen
		});
		
		res.end(outputStr);
	});
}


http = require("http");
http.createServer(onRequest).listen(portnum);

console.log("Server started ,listening on port#" +portnum);