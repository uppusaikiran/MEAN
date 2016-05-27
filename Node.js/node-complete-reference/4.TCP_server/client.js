var net = require('net');

var client = new net.Socket();

client.connect(3000, "127.0.0.1");

client.on('data', function(data){
  console.log("Data "+ data);
  client.destroy();
});

client.on('close',function(){
  console.log('Connection closed');
});
