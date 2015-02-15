window.onload = function () {
	var elms = document.getElementsByTagName("*");
	var n = elms.length;
	for(var i = 0; i < n; i ++) {
		if(window.getComputedStyle(elms[i]).cursor == "pointer") {
			elms[i].style.cursor = "url(dot.jpg)";
		}
	}
    var moveDiv = document.getElementById("movingDiv");
    window.onkeydown = function(e) {
        e.preventDefault();
        if (!e){
            e = window.event;
        }
        var keyCode;
        // pixel wise speed variable
        var speed = 10;      
		if (e.which) {
            keyCode = e.which;
        } else {
            keyCode = e.keyCode;
        }

//increment/decrement the top or left of the div based on the arrow key movements

        if(keyCode === 37) {
            moveDiv.style.left = (parseInt(moveDiv.style.left, 10) - speed) + 'px';
        } else if (keyCode === 38) {
           moveDiv.style.top = (parseInt(moveDiv.style.top, 10) - speed) + 'px';
        } else if (keyCode === 39) {
           moveDiv.style.left = (parseInt(moveDiv.style.left, 10) + speed) + 'px';
        } else if (keyCode === 40) {
            moveDiv.style.top = (parseInt(moveDiv.style.top, 10) + speed) + 'px';
        }
    };
	
	/*function checkcollision() {
		var imgd = ctx.getImageData(x, y, 15, 15);
		var pix = imgd.data;
		for (var i = 0; n = pix.length, i < n; i += 4) {
			if (pix[i] == 0) {
				collision = 1;
			}
		}
	}*/
};