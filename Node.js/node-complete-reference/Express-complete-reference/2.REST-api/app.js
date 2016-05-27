var express = require('express');
var app = express();

app.get('/',function(req , res){
  res.json({message : 'Welcome to express'});
});

app.get('/home',function(req , res){
  
})

app.listen(process.env.PORT || 4000);
