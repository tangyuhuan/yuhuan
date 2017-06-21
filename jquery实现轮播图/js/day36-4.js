	
 $(function () {
 	var time = null,
		index = 0,
		pics = $('#banner div')
		size = pics.length,
		dots = $('#dots span');
	// 清除定时器,停止自动播放
function stopAutoPlay(){
	if(time){
       clearInterval(time);
	}
}

	// 图片自动轮播
function startAutoPlay(){
   time = setInterval(function(){
       index++;
       if(index >= size){
          index = 0;
       }
       changeImg();
   },2000)
}

function changeImg(){
   for(var i=0,len=dots.length;i<len;i++){
     
       pics[i].style.display = "none";
 }
   pics[index].style.display = "block";
   dots.eq(index).addClass('active').siblings().removeClass('active');
}


function slideImg(){
    $('.main').mouseover(function(){
    	stopAutoPlay();
    })
    $('.main').mouseout(function(){
    	startAutoPlay();
    })
    
     $('.main').mouseout();

    // 点击导航切换
   
   		dots.on('click',function(){
   			index = $(this).index();
           changeImg();
   		})
       

      // 下一张
    $("#pre2").click(function(){
    	index++;
       if(index>=size) index=0;
       changeImg();
    }) 

    // 上一张
    $("#pre").click(function(){
    	index--;
       if(index<0) index=size-1;
       changeImg();
    }) 

 }
slideImg();

});
   

 