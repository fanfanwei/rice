$(function() {
/* #header */
	function showCity(){
		$("#header .area dd").show()
		$("#header .area dt").addClass('active')
	}
	function hideCity(){
		$("#header .area dd").hide()
		$("#header .area dt").removeClass('active')
	}

	$("#header .area dt").mouseenter(function(event) {
		if( $("#header .area dd").css('display')==='block' ){showCity()}
			else{hideCity()}
	});
	$("#header .area dt").click(function(event) {
		showCity()
	});
	$("#header .area dt").mouseleave(function(event) {
		hideCity()
	});
	$("#header .area dd").mouseover(function(event) {
		showCity()
	});
	$("#header .area dd").mouseleave(function(event) {
		hideCity()
		$("#header .area dt").mouseover(function(event) {
			showCity()
		});
	});


	$(".phone").mouseenter(function(event) {
		$(this).addClass('active').children('.phone_download').show()
		$(this).children('.phone_icon').addClass('active')
	});
	$(".phone").mouseleave(function(event) {
		$(this).removeClass('active').children('.phone_download').hide()
		$(this).children('.phone_icon').removeClass('active')
	});

	$(".service").mouseenter(function(event) {
		$(this).addClass('active').children('ul').show()
	});
	$(".service").mouseleave(function(event) {
		$(this).removeClass('active').children('ul').hide()
	});

	$(".websitemap").mouseenter(function(event) {
		$(this).addClass('active').children('.map').show()
	});
	$(".websitemap").mouseleave(function(event) {
		$(this).removeClass('active').children('.map').hide()
	});


// #search

	$(".myjd dl").mouseenter(function(event) {
		$(this).children('dd').show().end().children('dt').addClass('active')
		$(this).find('i').addClass('active')
	});
	$(".myjd dl").mouseleave(function(event) {
		$(this).children('dd').hide().end().children('dt').removeClass('active')
		$(this).find('i').removeClass('active')
	});

	$(".shoppingcat dl").mouseenter(function(event) {
		$(this).children('dd').show().end().children('dt').addClass('active')
	});
	$(".shoppingcat dl").mouseleave(function(event) {
		$(this).children('dd').hide().end().children('dt').removeClass('active')
	});

// 
	$(".virtuals_title a").mouseover(function(event) {
		$(this).parents(".virtuals").children('i').stop(true,true).animate({left: $(".virtuals_title a").first().width()*$(this).index() }, 300).parents(".virtuals").find('.main').removeClass('active').eq( $(this).index() ).addClass('active')

	});


// 展示列表
	var iCarouselIndex=0;
	$(".pics_carousel .controls li").mouseover(function(){
		iCarouselIndex=$(this).index()
		fun_Carousel()
	})
	function fun_Carousel(){
		$(".pics_carousel .pics li").removeClass('active').eq( iCarouselIndex ).addClass('active')
		$(".pics_carousel .controls li").removeClass('active').eq( iCarouselIndex ).addClass('active')
	}

	var iCounter_pics_scroll=0
	$(".pics_scroll .prev").click(function(event) {
		if( parseInt( $(".pics_scroll .pics_show ul").css('left') ) <= -3232 ){
			$(".pics_scroll .pics_show ul").stop(true,true).animate({left:0}, 300)
		}else{
			$(".pics_scroll .pics_show ul").stop(true,true).animate({left: "-=820"}, 300)
		}
	});
	$(".pics_scroll .next").click(function(event) {
		if( parseInt( $(".pics_scroll .pics_show ul").css('left') ) > -609 ){
			$(".pics_scroll .pics_show ul").stop(true,true).animate({left:-3232}, 300)
		}else{
			$(".pics_scroll .pics_show ul").stop(true,true).animate({left: "+=820"}, 300)
		}
	})
	$(".pics_scroll .prev img,.pics_scroll .next img").off("click")
	

	$(".showcase_content ul.big li").mouseenter(function(event) {
		$(this).find('img').stop(true,true).animate({left:-15}, 500)
	});
	$(".showcase_content ul.big li").mouseleave(function(event) {
		$(this).find('img').stop(true,true).animate({left:0}, 500)
	});



// #nav

	$(".listVertical li").on("mouseover",function(){
		$(".subContainer").hide().eq( $(this).index() ).stop(true,true).show()
	})
	$(".listVertical li").hover(function() {
		$(".subContainer").hide().eq( $(this).index() ).stop(true,true).show()
	}, function() {
		$(".subContainer").hide()
	});
	$(".subContainer").mouseover(function() {
		$(this).show()
	});
	$(".subContainer").mouseout(function() {
		$(this).hide()
	});
	
	
	
	// 导航左侧栏js效果 start
		$(".pullDownList li").hover(function(){
			$(".yMenuListCon").fadeIn();
			var index=$(this).index(".pullDownList li");
			if (!($(this).hasClass("menulihover")||$(this).hasClass("menuliselected"))) {
				$($(".yBannerList")[index]).css("display","block").siblings().css("display","none");
				$($(".yBannerList")[index]).removeClass("ybannerExposure");
				setTimeout(function(){
				$($(".yBannerList")[index]).addClass("ybannerExposure");
				},60)
			}else{	
			}
			$(this).addClass("menulihover").siblings().removeClass("menulihover");
				$(this).addClass("menuliselected").siblings().removeClass("menuliselected");
			$($(".yMenuListConin")[index]).fadeIn().siblings().fadeOut();
		},function(){
			
		})
		$(".pullDown").mouseleave(function(){
			$(".yMenuListCon").fadeOut();
			$(".yMenuListConin").fadeOut();
			$(".pullDownList li").removeClass("menulihover");

		})
		// 导航左侧栏js效果  end
		
		
		function banner() {
			var index = 1;
			var len = $(".banner .list li").length;
			var time;
			for (i = 1; i <= len; i++) {
				var Obtn = $("<li>" + i + "</li>").appendTo($(".banner .btn"));
			}
			$(".banner .btn li").eq(0).addClass('hover');
			$(".banner .list li").eq(0).css("z-index", "1");
			$(".banner .btn li").mouseover(function() {
				index = $(".banner .btn li").index(this);
				show(index);
			})
			time = setInterval(function() {
				show(index);
				index++;
				if (index == len) {
					index = 0
				}
			}, 5000);

			function show(index) {
				$(".banner .list li p").removeClass('hover');
				$(".banner .list li").eq(index).find("p").addClass('hover');
				$(".banner .btn li").eq(index).addClass('hover').siblings("li").removeClass('hover');
				$(".banner .list li").eq(index).fadeIn(900).siblings("li").fadeOut(600);
			}
		}
		banner();

/* floorsList */

	$(".floorsList_center_title h3").mouseover(function(event) {
		$(this).addClass('active').siblings('h3').removeClass('active').siblings('i').stop(true,true).animate({left:($(this).index()-1)*$(this).width()}, 300).parents('.floorsList_center').find('ul.main').removeClass('active').eq( $(this).index()-1 ).addClass('active')
	});

	$("#book .floorsList_right_title_tabs h3").mouseover(function(event) {
		$(this).siblings('i').stop(true,true).animate({left: ( $(this).index() -1 )*$(this).width() }, 300).parent().siblings().children('ul').removeClass('active').eq( $(this).index()-1).addClass('active')
	});

	$(".pic_big_tabs .controls li").mouseenter(function(event) {
		$(this).addClass('active').siblings().removeClass('active').parents('.pic_big_tabs').children('.pics').stop(true,true).animate({left: $(this).index()*-210 }, 300)
	});

	$(".pic_small_tabs .controls li").mouseenter(function(event) {
		$(this).addClass('active').siblings().removeClass('active').parents('.pic_small_tabs').find('.pics li').removeClass('active').eq( $(this).index() ).addClass('active')
	});

	/*懒得封装了，就俩....*/
      timer1=setInterval(function(){
        $(".hot_activity .hot_list li").last().hide()
        $(".hot_activity .hot_list ul").prepend( $(".hot_activity .hot_list li").last() )
        $(".hot_activity .hot_list li").first().slideDown(1000)
      },2000)

      timer2=setInterval(function(){
        $(".hot_order .hot_list li").last().hide()
        $(".hot_order .hot_list ul").prepend( $(".hot_order .hot_list li").last() )
        $(".hot_order .hot_list li").first().slideDown(1000)
      },2000)
      
      $('#q').on('input propertychange', function() {
			var val = $(this).val();
			if (val.length > 0) {
				$('#place').hide();
			} else {
				$('#place').show();
			}
		})
      
      $('#search-bd li').click(function() {
			var index = $(this).index();
			//              $('#search-hd .search-combobox-input').eq(index).show().siblings('.search-combobox-input').hide();
			$(this).addClass('selected').siblings().removeClass('selected');
			$('#q').val('');
			$('#place').show();
		});


});