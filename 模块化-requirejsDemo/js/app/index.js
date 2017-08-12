/*
首页功能
 */

define(['jquery','components/goTop','components/carousel','components/waterfall','components/jsonp'],function($,GoTop,Carousel,WaterFall,Jsonp){
	 GoTop.init($('body'), $('body'), 200);
	 Carousel.init($('.carousel'));
	 new Jsonp($('.waterfall-ct'));
	 $('.loadmore').on('click',function(){
	     //因为每次都新new了一个curPage就不会递增
	     new Jsonp($('.waterfall-ct'));
	 })
	 var $list = $('.navlist li')
	 $list.on('click',function(){
	     for (var i = 0; i<$list.length; i++) {
	         console.log(i);
	         $list.eq(i).removeClass('active');
	     }
	     $(this).addClass('active');
	 })
})


