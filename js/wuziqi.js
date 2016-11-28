//制作棋盘
$(function(){

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	function qipan() {
		ctx.beginPath();
		for (var i = 0; i < 22; i++) {
			ctx.moveTo(13.5, 13.5 + i * 30);
			ctx.lineTo(643.5, 13.5 + i * 30);
			ctx.moveTo(13.5 + i * 30, 13.5);
			ctx.lineTo(13.5 + i * 30, 643.5);
		};
		ctx.closePath();
		ctx.stroke();
	}
	qipan()

	function qizi(color) {
		ctx.save();
		ctx.translate(300, 300);
		ctx.beginPath();
		
		if (color === "black") {
			var g = ctx.createRadialGradient(-10,-10,20,0,0, 50)
			g.addColorStop(0.5, "blue");
			g.addColorStop(0.8, "green");
			g.addColorStop(1, "red");
			ctx.fillstyle = g;
		} else {
			var g = ctx.createRadialGradient(-10, -10, 20, 0, 0, 50)
			g.addColorStop(0.5, '#ffffff');
			g.addColorStop(0.8, '#cccccc');
			g.addColorStop(1, 'red');
			ctx.fillstyle = g;
		}
		ctx.arc(0, 0, 50, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
	qizi();
})