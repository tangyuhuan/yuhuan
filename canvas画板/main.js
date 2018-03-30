var canvas = document.getElementById('tutorial');
var context = canvas.getContext('2d');
autoSetCanvasSize(canvas);
listenToUser(canvas);
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
function listenToUser(canvas){
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
	//特性检测：检测的是是否支持触摸的特性，而不是设备
	if(document.body.ontouchstart!== undefined){
		//触碰设备
		canvas.ontouchstart = function(a){
			console.log('开始摸我了');
			var x=a.touches[0].clientX;
			var y=a.touches[0].clientY;
			using=true;
			if(eraserEnabled){
				context.clearRect(x-5,y-5,30,30);
			}else{
				lastPoint={x:x,y:y};
			}

		}
		canvas.ontouchmove = function(a){
			console.log('边摸边动');
			var x=a.touches[0].clientX;
			var y=a.touches[0].clientY;
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
		canvas.ontouchend = function(){
			console.log('摸完了');
			using=false;
		}

	}else{
		//非触屏设备
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