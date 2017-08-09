var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.get('/',function(req,res){
    res.sendfile(__dirname+"/views/index.html");
});

io.on('connection',function(socket){
    console.log("Client connected");
})

server.listen(3000,function(){
    console.log("server running on port 3000");
});