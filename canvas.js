var c = document.getElementById("c");
var ctx = c.getContext("2d");
var lev = 1;
var maxlev = 1;
/*
var initialize = function(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);

}*/

var update = function(){
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,c.getAttribute("width"),c.getAttribute("height"));
 
}
var nextimg = function(){
    lev++;
    if (lev > maxlev){
	lev = 1;
    }
    return "level" + lev + ".png"; 
};


var makeMaze = function(ctx,img){
    return {
	x:10,
	y:10,
	ctx:ctx,
	img:img,
	imgsrc:nextimg(),
	draw:function(){
	    ctx.drawImage(this.img,this.x,this.y);
	    this.img.src ="static/" + this.imgsrc;
	    this.img.border = "solid red 10px";
	    console.log(this.img.src);
	}
    }
}
var img = new Image();

c.addEventListener("onload", function(e){
    update();
    var maze = makeMaze(ctx,img);
    maze.draw();
});
c.addEventListener("mousemove", function(e){
    update();
    var maze = makeMaze(ctx,img);
    maze.draw();
    //var rect = c.getBoundingClientRect();
    //var mouseX = e.clientX - rect.left;
    //var mouseY = e.clientY - rect.top;
    
    
});



//window.requestAnimationFrame(update);
