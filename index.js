window.onload=function(){
	var canvas=document.getElementsByTagName("canvas")[0]
	var ctx=canvas.getContext("2d")
	
	
	
	
	
	
	function drawqipan(){							//画棋盘
		ctx.beginPath();
		for(var i=0;i<15;i++){
		ctx.moveTo(20.5+i*40,20.5)
		ctx.lineTo(20.5+i*40,580..5)
		ctx.moveTo(20.5,20.5+i*40)
		ctx.lineTo(580.5,20.5+i*40)
		}
		ctx.closePath();
		ctx.stroke()
	}
	
function qizi(color){
	ctx.save()
	ctx.translate(225,225)
	var g=ctx.createRadialGradient(-3,-5,3,0,0,15)
	ctx.shadowOffsetX = 2;
  	ctx.shadowOffsetY = 2;
  	ctx.shadowBlur = 2;
  	ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
	if(color=="black"){
		g.addColorStop(0.1,"#ccc")
		g.addColorStop(0.5,"#000")
	}
	else{
		g.addColorStop(0.1,"#fff")
		g.addColorStop(0.5,"#eee")
	}
	ctx.arc(0,0,15,0,Math.PI*2)
	ctx.fillStyle=g;
	ctx.fill();
	ctx.restore()
}
	drawqipan();
	
	canvas.onclick=function(e){
		var julix=e.offsetX;
		var juliy=e.offsetY;
		var a=Math.round(julix/15)*15;
		var b=Math.round(juliy/15)*15;
		console.log(a,b)
		drawheizi(a,b)
	}
}
