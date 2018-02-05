// JSPCB.js - Non-copyleft license

// To do: basic 2D drawing functions.

next=false;


jspcb = new Array();

pimg=new Image();
img=new Image();

jspcb.display=new Array();
jspcb.viewport=new Array();
jspcb.file=new Array();
jspcb.env=new Array();
jspcb.part=new Array();
jspcb.cut=new Array();
jspcb.hole=new Array();
jspcb.soldermask=new Array();
jspcb.silkscreen=new Array();
jspcb.server=new Array();
jspcb.layer=new Array();


// DISPLAY

jspcb.display.createDefault = function(){
  len=jspcb.display.length;
  jspcb.display[len]=new Object();
  jspcb.display[len].width=window.innerWidth;
  jspcb.display[len].height=window.innerHeight
  return len;
}

// VIEW

jspcb.viewport.createDefault = function(display){
  len=jspcb.viewport.length;
  
  jspcb.viewport[len]=new Object();
  w=jspcb.display[display].width;
  h=jspcb.display[display].height;
  
  jspcb.viewport[len].width=w;
  jspcb.viewport[len].height=h;
  
  var canvas = document.createElement("CANVAS");
  canvas.className = "jspcb_"+len;
  canvas.id="jspcb_id_"+len;
  canvas.width=w;
  canvas.height=h;

  e=document.getElementsByTagName('BODY')[0].appendChild(canvas);
  ctx=canvas.getContext("2d");


  img=new Image();
  img.src="foreground.png";
  ctx.drawImage(img,0,0,w,h)


ctx.globalAlpha=1;
next=false;
  pimg=new Image();
  pimg.src="pattern.png";
  
var pat=ctx.createPattern(pimg,"repeat");
ctx.rect(0,0,w,h);
ctx.fillStyle=pat;
ctx.fill();

  ctx.fillStyle="#bfbfcf";
  ctx.fillRect(w/4,h/4,w/2,h/2);


ctx.globalAlpha=0.25;
next=false;
  pimg=new Image();
  pimg.src="pattern.png";
  
var pat=ctx.createPattern(pimg,"repeat");
ctx.rect(0,0,w,h);
ctx.fillStyle=pat;
ctx.fill();


ctx.globalAlpha=0.4;
var grd=ctx.createRadialGradient(0,0,w>h?w:h,h>w?h:w,0,0);
grd.addColorStop(0/15,"black");
grd.addColorStop(1/15,"grey");
grd.addColorStop(2/15,"white");
grd.addColorStop(3/15,"cyan");
grd.addColorStop(4/15,"magenta");
grd.addColorStop(5/15,"gold");
grd.addColorStop(6/15,"olive");
grd.addColorStop(7/15,"gold");

grd.addColorStop(8/15,"cyan");
grd.addColorStop(9/15,"blue");
grd.addColorStop(10/15,"purple");
grd.addColorStop(11/15,"magenta");
grd.addColorStop(12/15,"black");
grd.addColorStop(13/15,"orange");
grd.addColorStop(14/15,"yellow");
grd.addColorStop(15/15,"lime");

// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(0,0,w,h);



  ctx.fillStyle="#5f4f3f";
ctx.globalAlpha=0.2;
  ctx.fillRect(0,0,w,h);

  img=new Image();
  img.src="reflection.jpg";
  ctx.drawImage(img,0,0,w,h)


ctx.globalAlpha=1;

ctx.fillStyle="#ffffff";

  ctx.font="12px Arial";
  ctx.fillText("2D Canvas Background Initialized ...",w/4+10,h/4+20);


  img=new Image();
  img.src="logo.png";
  ctx.drawImage(img,10,10,128,128)
  return canvas.id;
}

// INIT

jspcb.initz=new function(){
  display=jspcb.display.createDefault(); // default display
  id=jspcb.viewport.createDefault(display); // default viewports
return id;
}();

//jspcb.initz();

