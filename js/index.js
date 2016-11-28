$(function(){
	var canvas=$("#qi")[0];
	var person1=$(".person1")[0];
	var person2=$(".person2")[0];
	var ctx=canvas.getContext("2d");
	var ctx1=person1.getContext("2d");
	var ctx2=person2.getContext("2d");
	var audio=$("audio")[0];
	var step=40;
	var sr=4;
	var br=18;
	var flag=true;
	var color;
	var arr=[];
	var qizi={};
	var u=0;
	var v=0
	function l(x){					//核心函数
		return (x+0.5)*step+0.5
	}
	
	function drawQipan(){			//棋盘
		ctx.save();
		ctx.beginPath();
		for(var i=0;i<15;i++){
		ctx.moveTo(l(i),l(0))
		ctx.lineTo(l(i),l(14))
		ctx.moveTo(l(0),l(i))
		ctx.lineTo(l(14),l(i))
		}
		
		ctx.stroke()
		ctx.closePath()
		ctx.restore();
	}
	
	function cir(a,b){				//小圆点
		ctx.save();
		ctx.translate(l(a),l(b))
		ctx.beginPath();
		ctx.arc(0,0,sr,0,Math.PI*2)
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
	
	function luozi(x,y,z){	//落子
		
		ctx.save();
		ctx.translate(l(x),l(y))
		ctx.beginPath();
		var g=ctx.createRadialGradient(-5,-7,2,0,0,15)
		ctx.shadowOffsetX = 2;
	  	ctx.shadowOffsetY = 2;
	  	ctx.shadowBlur = 2;
	  	ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
		if(z=="black"){
			g.addColorStop(0.1,"#ccc")
			g.addColorStop(0.5,"#000")
		}else{
			g.addColorStop(0.1,"#fff")
		
			g.addColorStop(0.5,"#eee")
		}
		ctx.arc(0,0,br,0,Math.PI*2)
		ctx.fillStyle=g;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
		qizi[x+"_"+y]=z;
	}
	
	function zhen1(){						//画指针
//		var s=s;
		person1.width=200
		person1.width=200
		ctx1.save()
		ctx1.beginPath()
		ctx1.arc(100,100,5,0,Math.PI*2)
		ctx1.closePath()
		ctx1.stroke();
		ctx1.restore()
		ctx1.save();	
		ctx1.translate(100,100)
		ctx1.rotate(Math.PI/180*6*u)
		ctx1.beginPath()
		ctx1.moveTo(0,-5)
		ctx1.lineTo(0,-50)
		ctx1.moveTo(0,5)
		ctx1.lineTo(0,20)
		ctx1.closePath()
		ctx1.strokeStyle="red"
		ctx1.stroke();
		ctx1.restore();
		u=u+1;
		if(u>=360){
			u=0
		}
	}	
	function zhen2(){						//画指针
//		var s=s;
		person2.width=200
		person2.width=200
		
		
		ctx2.save()
		ctx2.beginPath()
		ctx2.arc(100,100,5,0,Math.PI*2)
		ctx2.closePath()
		ctx2.stroke();
		ctx2.restore()
		ctx2.save();	
		ctx2.translate(100,100)
		ctx2.rotate(Math.PI/180*6*v)
		ctx2.beginPath()
		ctx2.moveTo(0,-5)
		ctx2.lineTo(0,-50)
		ctx2.moveTo(0,5)
		ctx2.lineTo(0,20)
		ctx2.closePath()
		ctx2.strokeStyle="red"
		ctx2.stroke();
		ctx2.restore();
		v=v+1;
		if(v>=360){
			v=0
		}
	}	
	zhen1()
	zhen2()
//	zhen(ctx1)
//	zhen(ctx2)
	var t2;
	var t1=setInterval(zhen1,1000)
	$(canvas).on("click",function(e){
		var x=Math.floor(e.offsetX/step)
		var y=Math.floor(e.offsetY/step)
		audio.play()
		if(qizi[x+"_"+y]){
			return
		}
		if(flag){
			luozi(x,y,"black")
			v=0;
			u=0;
			zhen1()
			clearInterval(t1)
			t2=setInterval(zhen2,1000)
		}else{
			luozi(x,y,"white")
			u=0;
			v=0;
			zhen2()
			clearInterval(t2)
			t1=setInterval(zhen1,1000)
		}
		flag=!flag;	
	})
	cir(3,3)
	cir(11,3)
	cir(7,7)
	cir(3,11)
	cir(11,11)
	drawQipan();
	
})
