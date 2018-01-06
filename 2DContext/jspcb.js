// JSPCB.js - Non-copyleft license

// To do: basic 2D drawing functions.

jspcb = new Array();

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
  jspcb.display[len].height=window.innerHeight;
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
  ctx.fillStyle="#FF0000";
  ctx.fillRect(w/4,h/4,w/2,h/2);
  
}

// INIT

jspcb.initz=new function(){
  display=jspcb.display.createDefault(); // default display
  jspcb.viewport.createDefault(display); // default viewports
}

window.onload=jspcb.initz;
