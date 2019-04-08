var express=require('express');
var app = express();
var http = require('http').Server(app);


app.use(express.static("."));

app.use(express.static(__dirname+'/model/'));




app.get('/', function(req, res){
  res.sendFile(__dirname + '/augmented.html');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

