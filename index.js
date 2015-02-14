

var app = require ("express")();
var http = require ("http").Server(app);
var io = require("socket.io")(http);
var path = require("path")

var total = 0;
var webpage = "index.html";
var webdir = "templates/"

app.get("/", function(re,res){
    res.sendFile(path.join(__dirname,webdir,webpage));
});

io.on("connection", function(socket){
    total++;
    console.log(total + " users connected");
    socket.on('disconnect', function(){
	total--;
	console.log('a user disconnected');
    });
});

http.listen(3000, function(){
    console.log("listening on *:3000");
});



