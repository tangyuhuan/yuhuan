function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}
//全局变量
var timer=null,
	index = 0,
    pics = byId("banner").getElementsByTagName("div"),
    len = pics.length,
    menu=byId("menu"),
    menuItems=menu.getElementsByTagName("div");
function slideImg(){
	var main=byId("main");
	// 清除定时器,停止自动播放
  	main.onmouseover=function(){
    //滑过清除定时器
    if(timer) clearInterval(timer);
	}
	//图片自动轮播
	main.onmouseout=function(){
    timer = setInterval(function(){
       index++;
       if(index >= len){
          index = 0;
       }//切换图片
       changeImg();
   },1000)
}
	//自带在banner上触发鼠标离开的事件
	main.onmouseout();

	//遍历所有菜单选项，且绑定点击事件，点击菜单选项切换图片
  	for(var d=0;d<len;d++){
  	//给所有menuItems添加一个id的属性，值为d,作为当前menuItems的索引
    menuItems[d].id=d;
     console.log(d);
    menuItems[d].onclick = function(){
     console.log(d);
     //改变index为当前menuItems的id
    index=this.id;
    //调用切换图片函数实现图片切换
    changeImg();
      }
  }

}

//切换图片
function changeImg(){
  //遍历banner下所有的div及dots下所有的menuItems,将div隐藏
  for(var i=0;i<len;i++){
   pics[i].style.display="none";
   menuItems[i].className="menu-item";
  }
  //根据index索引找到当前div和当前menuItems 将其显示出来和设为当前
  pics[index].style.display='block';
  menuItems[index].className="active";
}
slideImg();
