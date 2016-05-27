var fs = require('fs');

var file_contents = fs.readFileSync('package.json').toString();
console.log(file_contents);

fs.readFile('package.json' ,function(err , buf){
  console.log(buf.toString());
});
