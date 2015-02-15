var c = document.getElementById("c");
var ctx = c.getContext("2d");


var lev = 0;
var maxlev = 10;


var update = function(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,c.getAttribute("width"),c.getAttribute("height"));
 
}
var nextimg = function(){
    lev++;
    if (lev < 6){
        document.getElementById("header").innerHTML = "Click on a rectangle to proceed";
	   return "Start" + lev + ".png"; 
    }
    else{
       return "level" + (lev-5) + ".png";
    }
    
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

var canmove=false;
console.log("false");
c.addEventListener("click",function(e){
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

    var po = ctx.getImageData(mouseX,mouseY,1,1).data;
    if (po[0]==200 && po[1] ==200 && po[2]==0){
        imgsrc=nextimg();
        update();
        alert(imgsrc);
        if (lev>5){
            maze = makeMaze(ctx,img,imgsrc);
            maze.draw();
        }
    }
    else if (po[0]==0 && po[1] ==84 && po[2]==166){
        canmove=true;
        document.getElementById("header").innerHTML = "Go!";
    }
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

    var p = ctx.getImageData(mouseX,mouseY,1,1).data;
    console.log("___");

    if (p[0]==0 && p[1] ==0 && p[2]==0 && canmove){
	   //console.log("black");
        maze = makeMaze(ctx,img,imgsrc);
        maze.draw();
        canmove=false;
        document.getElementById("header").innerHTML = "Try again - Click blue to proceed";
    }
    if (p[0]==255 && p[1] ==0 && p[2]==0 && canmove){
       console.log("win");
       imgsrc=nextimg();
       maze = makeMaze(ctx,img,imgsrc);
       maze.draw();
       canmove=false;
       document.getElementById("header").innerHTML = "Click blue to proceed";
    }
});
//window.requestAnimationFrame(update);
