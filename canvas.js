var c = document.getElementById("c");
var ctx = c.getContext("2d");


var lev = 2;
var maxlev = 4;


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
	    this.img.src ="static/" + this.imgsrc;
	    ctx.drawImage(this.img,this.x,this.y);
	  
	    //this.img.border = "solid red 10px";
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
    
    mouseX = mouseX-1;
    mouseY = mouseY-1;
    if (mouseX <1){
	mouseX++;
    }
    if (mouseY<1){
	mouseY++;
    }

    var p = ctx.getImageData(mouseX,mouseY ,1,1).data;
    console.log("___");
    if (p[0]==0 && p[1] ==0 && p[2]==0){
	console.log("black ");
    }
});
//window.requestAnimationFrame(update);
