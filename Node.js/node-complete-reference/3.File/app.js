var fs = require('fs');

var file_conten = fs.readFileSync('package.json').toString();
console.log(file_conten);

fs.readFile('package.json' ,function(err , buf){
  console.log(buf.toString());
});
