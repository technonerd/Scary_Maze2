var c = document.getElementById("c");
var ctx = c.getContext("2d");
var lev = 1;
var maxlev = 3;

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
    var rect = c.getBoundingClientRect()
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;
    var mouseX = e.pageX;
    var mouseY = e.pageX;
    console.log(mouseX + ", " + mouseY);

//////////////////////////////////////////////////
//if mouseX and mouse Y on pixel that is red
    //initiate endgame screen

    //note for lise - > end game screen should disappear when both ppl have entered the game

    //
       
    
    

//////////////////////////////////////////////////

});


//window.requestAnimationFrame(update);
