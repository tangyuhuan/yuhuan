		var canvas = document.getElementById('tutorial');
		var context = canvas.getContext('2d');
		autoSetCanvasSize(canvas);
		listenToMouse(canvas);
		/*********橡皮擦or画笔被启用************/
		var eraserEnabled=false;
		eraser.onclick=function(){
			eraserEnabled=!eraserEnabled;
			if(eraserEnabled){
				eraser.textContent="画笔";
			}else{
				eraser.textContent="橡皮擦";
			}
		}
//canvas每当高度或宽度被重设时，画布内容就会被清空
/*********自动设置画布大小************/
function autoSetCanvasSize(canvas){
	setCanvasSize();
	window.onresize=function(){
		setCanvasSize();
	};
	function setCanvasSize(){
		var pageWidth = document.documentElement.clientWidth;
		var pageHeight = document.documentElement.clientHeight;
		canvas.width=pageWidth;
		canvas.height=pageHeight;
	}
}
/*********重置画布************/
reset.onclick=function(canvas){
	context.clearRect(0,0,document.documentElement.clientWidth,document.documentElement.clientHeight);
}


/*********监听鼠标************/
function listenToMouse(canvas){
	context.strokeStyle = "rgb(0,0,0)";
	red.onclick=function(){
		if(eraserEnabled){
			eraserEnabled=!eraserEnabled;
		}
		context.strokeStyle ="rgb(255,0,0)";
	}
	blue.onclick=function(){
		if(eraserEnabled){
			eraserEnabled=!eraserEnabled;
		}
		context.strokeStyle ="rgb(0,0,255)";
	}
	green.onclick=function(){
		if(eraserEnabled){
			eraserEnabled=!eraserEnabled;
		}
		context.strokeStyle ="rgb(0,255,0)";
	}


	var using=false;
	var lastPoint={x:undefined,y:undefined};

	canvas.onmousedown = function(a){
		var x=a.clientX;
		var y=a.clientY;
		using=true;
		if(eraserEnabled){
			context.clearRect(x-5,y-5,30,30);
		}else{
			lastPoint={x:x,y:y};
		}
	}

	canvas.onmousemove = function(a){
		var x=a.clientX;
		var y=a.clientY;
		if(!using){
			return;
		}else{
			if(eraserEnabled){
				context.clearRect(x-5,y-5,30,30)
			}else{
				var newPoint={x:x,y:y}; 
				drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
				lastPoint=newPoint;
			}
		}
	}

	canvas.onmouseup=function(){
		using=false;
	}
}
/*********画线段************/

function drawLine(x1,x2,y1,y2){
	context.beginPath();
	context.moveTo(x1,x2);
	context.lineTo(y1,y2);
	context.lineWidth=5;
	context.stroke();
	context.closePath();
}