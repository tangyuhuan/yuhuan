
var canvas = document.getElementById('tutorial');
var context = canvas.getContext('2d');
autoSetCanvasSize(canvas);
listenToUser(canvas);
var lineWidth = 4;
/*********橡皮擦or画笔被启用************/
var eraserEnabled=false;

pen.onclick=function(){
	eraserEnabled=false;
	pen.classList.add('active');
	eraser.classList.remove('active');
}
eraser.onclick=function(){
	eraserEnabled=true;
	eraser.classList.add('active');
	pen.classList.remove('active');
}
thin.onclick=function(){
	lineWidth=4;
	thin.classList.add('active');
	thick.classList.remove('active');
}
thick.onclick=function(){
	lineWidth=7;
	thick.classList.add('active');
	thin.classList.remove('active');
}
/*********清除画布、保存画布************/
clean.onclick=function(){
	context.clearRect(0,0,canvas.width,canvas.height);
}
save.onclick=function(){
	var url = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	var a = document.createElement('a')
	document.body.appendChild(a)
	a.href = url
	a.download = 'myPic.jpg'
	a.target="_blank"
	a.click()
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
function removeChildrenActive(){
	black.classList.remove("active");
	yellow.classList.remove("active");
	red.classList.remove("active");
	blue.classList.remove("active");
	green.classList.remove("active");
}
/*********监听鼠标************/
function listenToUser(canvas){
	context.strokeStyle = "rgb(0,0,0)";
	black.onclick=function(){
		context.strokeStyle = "rgb(0,0,0)";
		removeChildrenActive()
		black.classList.add("active");
	}
	yellow.onclick=function(){
		context.strokeStyle ="rgb(255,255,51)"
		removeChildrenActive()
		yellow.classList.add("active")
	}
	red.onclick=function(){
		context.strokeStyle ="rgb(255,153,153)";
		removeChildrenActive()
		red.classList.add("active");
	}
	blue.onclick=function(){
		context.strokeStyle ="rgb(153,204,255)";
		removeChildrenActive()
		blue.classList.add("active");
	}
	green.onclick=function(){
		context.strokeStyle ="rgb(102,204,102)";
		removeChildrenActive()
		green.classList.add("active");
	}



	var using=false;
	var lastPoint={x:undefined,y:undefined};
	//特性检测：检测的是是否支持触摸的特性，而不是设备
	if(document.body.ontouchstart!== undefined){
		//触碰设备
		canvas.ontouchstart = function(a){
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
	context.lineWidth=lineWidth;
	context.stroke();
	context.closePath();
}


/************画圆**************/

function drawCircle(x,y,radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, (Math.PI/180)*360);
	ctx.fill();
}