
	function toolsv(){
		var top=$(document).scrollTop();
		var controler = 50;
		//higher controller, slower the element moving
		
		var nav_height = 90;

		if(($.browser.msie==true)&&($.browser.version==6.0)){
			if(top>nav_height)$("#nav").css({position:"absolute",top:top-nav_height});
		}
		
		else{
		
			//nav sticker
			if(top>nav_height) $("#nav").css({position:"fixed",top:"-"&top+"px"});
			else $("#nav").css({position:"static",top:0});
			
			//left-right animate
			$(".element_leftright").each(function(){
				if(top>0){
					var drift_leftright =($(this).position().top - top)/controler + "%";
					$(this).css({left:drift_leftright});
				}
			});
			
			//up-down animate
			$(".element_updown").each(function(){
				if(top>0){
					var drift_updown =(top-$(this).position().top)/controler + "%";
					$(this).css({top:drift_updown});
				}
			});
			
			//back-to-top animate
			if(top>($(document).height() - $(window).height() - nav_height))
			{
				$('#back').stop().animate({'bottom':78},400)
			}
			else
			{
				$('#back').stop().animate({'bottom':45},400)
			}

			
		}
			
		
		}
	$(function(){
		window.onscroll=toolsv;
		window.onresize=toolsv;
	});
