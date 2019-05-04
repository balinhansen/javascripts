// quack.js - Non-copyleft license

// To do: basic 2D drawing functions.



next=false;


quack = new Array();

pimg=new Image();
img=new Image();

quack.display=new Array();
quack.viewport=new Array();
quack.file=new Array();
quack.env=new Array();


// DISPLAY

quack.display.createDefault = function(){
  len=quack.display.length;
  quack.display[len]=new Object();
  quack.display[len].width=window.innerWidth;
  quack.display[len].height=window.innerHeight
  return len;
}

// VIEW

quack.viewport.createDefault = function(display){
  len=quack.viewport.length;
  
  quack.viewport[len]=new Object();
  w=quack.display[display].width;
  h=quack.display[display].height;
  
  quack.viewport[len].width=w;
  quack.viewport[len].height=h;
  
  var canvas = document.createElement("CANVAS");
  canvas.className = "quack_"+len;
  canvas.id="quack_id_"+len;
  canvas.width=w;
  canvas.height=h;

  e=document.getElementsByTagName('BODY')[0].appendChild(canvas);
  ctx=canvas.getContext("2d");

/*
  img=new Image();
  img.src="logo.jpg";

  ctx.drawImage(img,0,0)
alert("error");
*/

ctx.globalAlpha=1;
next=false;

/*
  pimg=new Image();
  pimg.src="pattern.png";
  
var pat=ctx.createPattern(pimg,"repeat");
ctx.rect(0,0,w,h);
ctx.fillStyle=pat;

*/


//	ctx.fill();



  ctx.fillStyle="#bfbfcf";
  ctx.fillRect(w/4,h/4,w/2,h/2);


/*
ctx.globalAlpha=0.25;
next=false;
  pimg=new Image();
  pimg.src="pattern.png";
  

var pat=ctx.createPattern(pimg,"repeat");
ctx.rect(0,0,w,h);
ctx.fillStyle=pat;
ctx.fill();
*/

ctx.globalAlpha=0.3;
var grd=ctx.createLinearGradient(0,0,w>h?w:h,h>w?h:w,0,0);
grd.addColorStop(0/2,"black");
grd.addColorStop(3/4,"red");
grd.addColorStop(4/4,"red");



// Fill with gradient

ctx.fillStyle=grd;
ctx.fillRect(0,0,w,h);

/*
 // ctx.fillStyle="#5f4f3f";
ctx.globalAlpha=0.2;
  ctx.fillRect(0,0,w,h);
*/


ctx.globalAlpha=1;

ctx.fillStyle="#ffffff";

  ctx.font="12px Arial";
  ctx.fillText("2D Canvas Background Initialized ...",w/4+10,h/4+20);




	return canvas.id;
}

// INIT

quack.initz=new function(){
  display=quack.display.createDefault(); // default display
  id=quack.viewport.createDefault(display); // default viewports
return id;
}();

//quack.initz();

