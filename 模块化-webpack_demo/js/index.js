/*
首页功能
 */

var $ =require('./lib/jquery.js');
var GoTop = require('./components/gotop.js');
var Carousel = require('./components/carousel.js');
var Jsonp = require('./components/jsonp.js');

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



