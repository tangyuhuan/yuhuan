
define('components/carousel',['jquery'],function($){
  var Carousel = (function(){
    function _Carousel($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
  }
  _Carousel.prototype.init = function(){
    var $imgCt = this.$imgCt = this.$ct.find('.img-ct')
    var $imgs = this.$imgs = this.$ct.find('.img-ct>li')
    var $preBtn = this.$preBtn = this.$ct.find('.pre')
    var $nextBtn = this.$nextBtn = this.$ct.find('.next')
    var $bullets = this.$bullets = this.$ct.find('.bullet li')


    this.pageIndex = 0
    this.isAnimate = false

    this.imgCount = $imgs.length
    this.imgWidth = $imgs.width()
    $imgCt.append($imgs.first().clone())
    $imgCt.prepend($imgs.last().clone())
    $imgCt.width((this.imgCount+2) * this.imgWidth)
    $imgCt.css({left: -this.imgWidth})


  }
  _Carousel.prototype.bind = function(){
    var _this = this;

    this.$preBtn.click(function(e){
      e.preventDefault()
      _this.playPre(1)
    })

    this.$nextBtn.click(function(e){
      e.preventDefault()
      _this.playNext(1)
    })
    
  }
  _Carousel.prototype.playNext = function(len){
    var _this = this;
    if(this.isAnimate) return;
      this.isAnimate = true
      this.$imgCt.animate({
        left: '-='+len*_this.imgWidth
      },function(){
        _this.pageIndex += len
        if(_this.pageIndex === _this.imgCount){
          _this.pageIndex = 0
          _this.$imgCt.css({left: -_this.imgWidth})
        }
        _this.setBullet()
      _this.isAnimate = false
        })
  }
  _Carousel.prototype.playPre = function(len){
    var _this = this;
    if(this.isAnimate) return;
      this.isAnimate = true
      this.$imgCt.animate({
        left: '+='+len*_this.imgWidth
      },function(){
        _this.pageIndex -= len
        if(_this.pageIndex < 0){
          _this.pageIndex = _this.imgCount - 1
          _this.$imgCt.css({left: -_this.imgCount*_this.imgWidth})
        }
        _this.setBullet()
        _this.isAnimate = false
      })
    
      
  }
  _Carousel.prototype.setBullet = function(){
    this.$bullets.removeClass('active')
          .eq(this.pageIndex)
          .addClass('active')
  }
    return {
      init: function($ct){
        $ct.each(function(index,node){
          new _Carousel($(node));
        })
      }
    }

  })()
  return Carousel;
})


  // Carousel.init($('.carousel'));
  // new _Carousel($('._carousel').eq(0));
  // new _Carousel($('._carousel').eq(1));
