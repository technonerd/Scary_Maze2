var c = document.getElementById("c");
var ctx = c.getContext("2d");
var lev = 1;
var maxlev = 2;
/*
var initialize = function(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);

}*/

var update = function(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,c.getAttribute("width"),c.getAttribute("height"));
 
}
var nextimg = function(){
    lev++;
    if (lev > maxlev){
	lev = 1;
    }
    return "level" + lev + ".png"; 
};


var makeMaze = function(ctx,img,imgsrc){
    return {
	x:10,
	y:10,
	ctx:ctx,
	img:img,
	imgsrc:imgsrc,
	draw:function(){
	    ctx.drawImage(this.img,this.x,this.y);
	    this.img.src ="static/" + this.imgsrc;
	    this.img.border = "solid red 10px";
	    console.log(this.img.src);
	}
    }
}
var img = new Image();
var imgsrc = nextimg();

c.addEventListener("onload", function(e){
    var maze = makeMaze(ctx,img,imgsrc);
    maze.draw();
});
c.addEventListener("mousemove", function(e){
    update();
    var maze = makeMaze(ctx,img,imgsrc);
    maze.draw();
    var rect = c.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.rect(188, 50, 200, 100);
    ctx.fillStyle = 'yellow';
    ctx.fill();
});



//window.requestAnimationFrame(update);
