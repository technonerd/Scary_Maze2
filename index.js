var app = require ("express")();
var http = require ("http").Server(app);
var io = require("socket.io")(http);
var path = require("path")
var im = require(app);
var total = 0;
var webpage = "canvas.html";
var webdir = ""
var onewinner= false;
app.get("/", function(re,res){
    res.sendFile(path.join(__dirname,webpage));
});
io.on("connection", function(socket){
    total++;
    console.log(total + " users connected");
    // insert blocking here
////////////////////////////////////
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
    socket.on("restartmsg", function(){
	onewinner=false;
	io.emit("new_level","new_level");

	console.log("restarted");
    });
});
      
http.listen(3000, function(){
    console.log("listening on port:3000");
});


