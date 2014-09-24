//make the canvas on the page
var canvas = document.createElement("canvas");
//whole width of the page
canvas.width= window.innerWidth;
//whole height of the page
canvas.height = window.innerHeight; 
//append the canvas to the page.in the document, in the body, append the child of "canvas"
document.body.appendChild(canvas);

//this is the contex and is saying that we areusing 2d
var ctx = canvas.getContext("2d");
// how think the pen is
var radius = 4;
//tells if the mouse is clicked down or not
var mouseDown = false;
// make the line between the dots thick 
ctx.lineWidth = radius*2;
//e is the event 
var blueLine = false;
var redLine = false;
var blackLine = false;
function draw(e){
// draw if mouse is down
	if(mouseDown == true && redLine == true){ //makes a red line
		// draw a line between the dots while drawing part 3
		ctx.lineTo(e.clientX, e.clientY);
		// make the line connector red
		ctx.strokeStyle = "#c82124";
		// draw a line between the dots part 4
		ctx.stroke();
		// makes the line red
		ctx.fillStyle = "#c82124"; 
		//begins the path
		ctx.beginPath(); 
		//draws a circle, you have an (x coord, a y coord, start position, and end position)
		ctx.arc(e.clientX, e.clientY, radius, 0, 2*Math.PI); //e is the event listener, clientX and clientY are the coordinates of the mouse (the radius, 2*Math.PI means that it is going to be a full circle
		//fills the circle
		ctx.fill();
		// draw a line between the dots while drawing
		ctx.beginPath();
		// draw a line between the dots while drawing part 2
		ctx.moveTo(e.clientX, e.clientY); 


	}
	
	else if(mouseDown == true && blueLine == true){ //makes a blue line
		// draw a line between the dots while drawing part 3
		ctx.lineTo(e.clientX, e.clientY);
		// make the line connector blue
		ctx.strokeStyle = "#3370d4";
		// draw a line between the dots part 4
		ctx.stroke();
		// makes the line blue
		ctx.fillStyle = "#3370d4"; 
		//begins the path
		ctx.beginPath(); 
		//draws a circle, you have an (x coord, a y coord, start position, and end position)
		ctx.arc(e.clientX, e.clientY, radius, 0, 2*Math.PI); //e is the event listener, clientX and clientY are the coordinates of the mouse (the radius, 2*Math.PI means that it is going to be a full circle
		//fills the circle
		ctx.fill();
		// draw a line between the dots while drawing
		ctx.beginPath();
		// draw a line between the dots while drawing part 2
		ctx.moveTo(e.clientX, e.clientY); 


	}
	
	else if(mouseDown == true && blackLine == true){ //makes a black line
		// draw a line between the dots while drawing part 3
		ctx.lineTo(e.clientX, e.clientY);
		// make the line connector black
		ctx.strokeStyle = "#000000";
		// draw a line between the dots part 4
		ctx.stroke();
		// makes the line black
		ctx.fillStyle = "#000000"; 
		//begins the path
		ctx.beginPath(); 
		//draws a circle, you have an (x coord, a y coord, start position, and end position)
		ctx.arc(e.clientX, e.clientY, radius, 0, 2*Math.PI); //e is the event listener, clientX and clientY are the coordinates of the mouse (the radius, 2*Math.PI means that it is going to be a full circle
		//fills the circle
		ctx.fill();
		// draw a line between the dots while drawing
		ctx.beginPath();
		// draw a line between the dots while drawing part 2
		ctx.moveTo(e.clientX, e.clientY); 


	}
	else if (mouseDown == true && blueLine == false && redLine == false){//makes the default black line
		// draw a line between the dots while drawing part 3
		ctx.lineTo(e.clientX, e.clientY);
		// draw a line between the dots part 4
		ctx.stroke();
		//begins the path
		ctx.beginPath(); 
		//draws a circle, you have an (x coord, a y coord, start position, and end position)
		ctx.arc(e.clientX, e.clientY, radius, 0, 2*Math.PI); //e is the event listener, clientX and clientY are the coordinates of the mouse (the radius, 2*Math.PI means that it is going to be a full circle
		//fills the circle
		ctx.fill();
		// draw a line between the dots while drawing
		ctx.beginPath();
		// draw a line between the dots while drawing part 2
		ctx.moveTo(e.clientX, e.clientY); 
	
	
	}
	}
// add an event listener that will listen for events in our canvas.
canvas.addEventListener("mousemove", draw); //when the mouse moves, it will draw
//do this function when the mouse is down
canvas.addEventListener("mousedown", function(e){ 
		// yes it is clicked
		mouseDown = true;
		//makes it so that you can draw individual dots
		draw(e); 
});
// do this function when the mouse has stopped being clicked down
canvas.addEventListener("mouseup", function(e){
		// no the mouse is no longer down
		mouseDown = false;
		// makes it so that you can draw another line without connecting it to the first line
		ctx.beginPath();
});

function drawBlueLine(){
		blueLine = true;
		blackLine = false;
		redLine = false;
}
function drawRedLine(){
		blueLine = false;
		blackLine = false;
		redLine = true;
		
}
function drawBlackLine(){
		blueLine = false;
		redLine = false;
		blackLine = true;
}
function reset(){
	location.reload();
}
