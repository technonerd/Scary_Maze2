
var mouseX; 
var mouseY;


var mouse = function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;

    var d = document.getElementById("cheat");
    d.innerHTML = mouseX + "    ,     " + mouseY;
      
 //   var pointer = document.getElementByID("pointer");

    var m = document.getElementById('pointer');
    m.style.position = "absolute";
    m.style.left = mouseX;
    m.style.top = mouseY;
};

window.addEventListener("mousemove",mouse);
 
