// floating.js

floating = new Array();

floating.display=new Array();
floating.viewport=new Array();


floating.nameFromId=function(id){
	return "floating_id_"+id;
}


// DISPLAY

floating.display.createDefault = function(){
	len=floating.display.length;
	floating.display[len]=new Object();
	floating.display[len].width=window.innerWidth;
	floating.display[len].height=window.innerHeight;
	return len;
}

// VIEW

floating.viewport.createDefault = function(display){
	len=floating.viewport.length;
	
	floating.viewport[len]=new Object();
	w=floating.display[display].width;
	h=floating.display[display].height;
	
	floating.viewport[len].width=w;
	floating.viewport[len].height=h;
	
	var canvas = document.createElement("CANVAS");
	canvas.className = "floating_"+len;
	canvas.id="floating_id_"+len;
	canvas.width=w;
	canvas.height=h;
		
	e=document.getElementsByTagName('BODY')[0].appendChild(canvas);
	/*
	ctx=canvas.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(w/4,h/4,w/2,h/2);
	*/
	
	return len;
}

floating.viewport.redbox=function(w,h){
	canvas=document.getElementById(floating.nameFromId(floating.default))
	ctx=canvas.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(100,100,w,h);
}

floating.viewport.splash=function(){
	id=floating.default;
	w=floating.viewport[id].width;
	h=floating.viewport[id].height;
	canvas=document.getElementById(floating.nameFromId(id));
	ctx=canvas.getContext("2d");
	/*
	ctx.fillStyle="#FF0000";
	ctx.fillRect(w/4,h/4,w/2,h/2);
	*/
	
	area=ctx.createImageData(Math.floor(w/2),Math.floor(h/2));
	
	sw=Math.floor(w/2);
	
	for (y=0;y<Math.floor(h/2);y++){
		syw=y*sw;
		
		for (x=0;x<sw;x++){
		pix=Math.round(Math.random()*255);
			sywx=(syw+x)*4;
//r
			area.data[sywx]=new Uint8ClampedArray([pix])[0];

//alert(area.data[(syw+x)*4]);
//g
			area.data[sywx+1]=new Uint8ClampedArray([pix])[0];

//alert(area.data[(syw+x+1)*4]);

//b
			area.data[sywx+2]=new Uint8ClampedArray([pix])[0];

//alert(area.data[(syw+x+2)*4]);

//a
			area.data[sywx+3]=new Uint8ClampedArray([255])[0];

//alert(area.data[(syw+x+3)*4]);
		}
	}


/*
//r
			area.data[(syw+x)*4]=new Uint8ClampedArray([parseInt(Math.round(Math.random()*255))])[0];

// alert(area.data[(syw+x)*4]);
//g
			area.data[(syw+x+1)*4]=new Uint8ClampedArray([parseInt(Math.round(Math.random()*255))])[0];

//alert(area.data[(syw+x+1)*4]);

//b
			area.data[(syw+x+2)*4]=new Uint8ClampedArray([parseInt(Math.round(Math.random()*255))])[0];

//alert(area.data[(syw+x+2)*4]);

//a
			area.data[(syw+x+3)*4]=new Uint8ClampedArray([parseInt(Math.round(Math.random()*255))])[0];

//alert(area.data[(syw+x+3)*4]);
		}
	}
	*/

	
	ctx.putImageData(area,Math.floor(w/4),Math.floor(h/4));


	txt="floating.js";
	
	
	autosize=Math.round(w/2/7 );

	ctx.font=autosize+"px Arial";
	ctx.textAlign="center";
	ctx.textBaseline="middle";
	ctx.lineWidth=Math.floor(autosize/10);
	
	ctx.shadowColor='black';
	ctx.shadowOffsetX=Math.floor(autosize/10/2);
	ctx.shadowOffsetY=Math.floor(autosize/10/2);
	ctx.shadowBlur=Math.floor(autosize/10);
	
	ctx.fillStyle="#000000";
	ctx.strokeText(txt,w/2,h/2);
	ctx.fillStyle="#57CFFF";
	ctx.fillText(txt,w/2,h/2);
}


// INIT

floating.initz=function(){
	display=floating.display.createDefault(); // default display
	floating.default=floating.viewport.createDefault(display); // default viewports
	//floating.viewport.redbox(160,200);
	
	setInterval(floating.viewport.splash,30);
}

window.onload=floating.initz;
