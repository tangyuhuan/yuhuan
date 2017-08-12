define("components/carousel",["jquery"],function(t){var i=function(){function i(t){this.$ct=t,this.init(),this.bind()}return i.prototype.init=function(){var t=this.$imgCt=this.$ct.find(".img-ct"),i=this.$imgs=this.$ct.find(".img-ct>li");this.$preBtn=this.$ct.find(".pre"),this.$nextBtn=this.$ct.find(".next"),this.$bullets=this.$ct.find(".bullet li");this.pageIndex=0,this.isAnimate=!1,this.imgCount=i.length,this.imgWidth=i.width(),t.append(i.first().clone()),t.prepend(i.last().clone()),t.width((this.imgCount+2)*this.imgWidth),t.css({left:-this.imgWidth})},i.prototype.bind=function(){var t=this;this.$preBtn.click(function(i){i.preventDefault(),t.playPre(1)}),this.$nextBtn.click(function(i){i.preventDefault(),t.playNext(1)})},i.prototype.playNext=function(t){var i=this;this.isAnimate||(this.isAnimate=!0,this.$imgCt.animate({left:"-="+t*i.imgWidth},function(){i.pageIndex+=t,i.pageIndex===i.imgCount&&(i.pageIndex=0,i.$imgCt.css({left:-i.imgWidth})),i.setBullet(),i.isAnimate=!1}))},i.prototype.playPre=function(t){var i=this;this.isAnimate||(this.isAnimate=!0,this.$imgCt.animate({left:"+="+t*i.imgWidth},function(){i.pageIndex-=t,i.pageIndex<0&&(i.pageIndex=i.imgCount-1,i.$imgCt.css({left:-i.imgCount*i.imgWidth})),i.setBullet(),i.isAnimate=!1}))},i.prototype.setBullet=function(){this.$bullets.removeClass("active").eq(this.pageIndex).addClass("active")},{init:function(e){e.each(function(e,n){new i(t(n))})}}}();return i});