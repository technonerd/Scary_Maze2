var app = require ("express")();
var http = require ("http").Server(app);
var io = require("socket.io")(http);
var path = require("path")

var total = 0;
var webpage = "index.html";
var webdir = "templates/"
var onewinner= false;
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
    socket.on('winner', function (data) {
	if (!onewinner){
	    io.emit("close", {close:"close"});
	    onewinner=true;
	    console.log("closing");
	}
    });
    socket.on("restart", function(){
	onewinner=false;
	io.emit("new_level","new_levelled");

	console.log("restarted");
    });
});
      
http.listen(3000, function(){
    console.log("listening on *:3000");
});




//bugs to note -> automatic disconnection when window is not main window
