$(document).ready(function(){	

	$("#menu_block .submenu_trigger").click(function(){								
		$("#menu_block .submenu").slideToggle("slow");		
		$("#menu_block .submenu_trigger").toggleClass("opened");	
		$(".blur").toggleClass("the-blur");
	});	
	
	$(document).click(function (e){ 
		var div = $("#menu_block"); 		
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) { 							
			$("#menu_block .submenu").slideUp();
			$("#menu_block .submenu_trigger").removeClass("opened");
			$(".blur").removeClass("the-blur");
		}				
	});	
	
	$(".menu_list .switch_button span").click(function(){	
		$(".menu_list .switch_button span").removeClass("selected")
		$(this).addClass("selected");				
	});	
	
	$(".weater_outlook_menu_trigger").click(function(){	
		$(".week-list").toggleClass("visible")		
	});
	
	$(".week-list li a").click(function(){	
		var text;
		text = $(this).html();		
		$(".weater_outlook_menu_trigger").html(text);
	});	


	$(".month_outlook_menu_trigger").click(function(e){	
		e.stopPropagation();
		var el = $(".month-list");
		var body = $("body");
		el.toggleClass("visible")
		if(el.hasClass("visible")) {
			body.on('click', clickHandler)
		} else {
			body.off("click", clickHandler)
		}

		function clickHandler(e) {
			var target = $(e.target);
			if(!target.closest(el).length > 0) {
				el.removeClass("visible");
				body.off("click", clickHandler)
			}
		}
	});
	
	$(".week-list li a").click(function(){	
		var text;
		text = $(this).html();		
		$(".month_outlook_menu_trigger").html(text);
	});	


	
	$(document).click(function (e){ 
		var div = $(".week-info-block"); 		
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) { 							
			$(".week-list").removeClass("visible");			
		}				
	});	
	
	
	$(".language_block div").click(function(){	
		$(".language_block div").removeClass("active")
		$(this).addClass("active");				
	});	
	
	$(".time_format_block div").click(function(){	
		$(".time_format_block div").removeClass("active")
		$(this).addClass("active");				
	});	
	
	$(".degree_block div").click(function(){	
		$(".degree_block div").removeClass("active")
		$(this).addClass("active");				
	});		
	

	$(".degree_block div").click(function(){	
		$(".degree_block div").removeClass("active")
		$(this).addClass("active");				
	});	
	
	$(".share_trigger").click(function(){	
		$(".share_submenu").toggleClass("visible")		
	});	
	
	$(".map_block").mouseover(function(){	
		$(".temperatute_map_block h2 a").addClass("hover");
	});	
	$(".map_block").mouseout(function(){	
		$(".temperatute_map_block h2 a").removeClass("hover");
	});
	
	$(document).click(function (e){ 
		var div = $(".share_trigger"); 		
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) { 							
			$(".share_submenu").removeClass("visible");			
		}				
	});	
	
	$("#settings_link").click(function() {	
		$('#alerts').modal('hide');				
	});

	$(".grad").click(function() {	
		$('.hidden_grad').toggleClass("visible");				
	});
	$(".hidden_grad").click(function() {		
		temp = $(".hidden_grad").html()
		$('.hidden_grad').html($(".grad").html());	
		$('.grad').html(temp);	
	});
	
	$(document).click(function (e){ 
		var div = $(".mobile-select"); 		
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) { 							
			$(".hidden_grad").removeClass("visible");			
		}				
	});	
	
	$(".city_input_container").click(function(){	
		$(".location_submenu").slideDown("slow");
				
	});	
	
	$(".location_submenu .close_block").click(function(){	
		$(".location_submenu").slideUp("slow");				
	});	
	
	
	$(".location_submenu li div").click(function(){	
		var text = $(this).html();	
		var substringArray = text.split(","); 	
		$(".location_submenu li").removeClass("current");
		$(this).parent("li").addClass("current");			
		$("#city_name").html(substringArray[0]);
		$("#country_name").html(substringArray[1]);		
	});	
	
	$(".location_submenu li .close").click(function(){	
		var text = $(".location_submenu .current").html();		
		$(this).parent('li').slideUp("slow");		
		if ($(this).parent('li').hasClass("w1"))
		$("#w1").slideUp("slow");
		if ($(this).parent('li').hasClass("w2"))
		$("#w2").slideUp("slow");
		if ($(this).parent('li').hasClass("w3"))
		$("#w3").slideUp("slow");
		if ($(this).parent('li').hasClass("w4"))
		$("#w4").slideUp("slow");
		if ($(this).parent('li').hasClass("w5"))
		$("#w5").slideUp("slow");		
		$("#city_name").html(text);	
	});



	$(".tabs_header .active a").click(function(){	
		$(".tab-content.weather_pages .tab-pane").slideDown("slow");
				
	});	
	
	$(".tabs_header .close_block").click(function(){	
		$(".tab-content.weather_pages .tab-pane").slideUp("slow");				
	});	

	
	$(".weather_schedule_trigger").click(function(){	
		$(".weather_schedule_container").slideToggle("slow");
	});	
	
	$(".tabs_header li").click(function(){	
		var block_content = $(this).children("a").html();		
		$(".weather_tabs_trigger").html(block_content);
	});
	
	$(".weather_tabs_trigger").click(function(){					
		$(".tabs_header").slideToggle("slow");
	});
	
	
	$(document).click(function (e){ 
		var div = $(".white_block"); 		
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) { 							
			$(".location_submenu").slideUp("slow");			
		}				
	});	
	
	
	if ($(window).width() > 767) {
	  var HeaderTop = 122; 
		$(window).scroll(function(){
			if( $(window).scrollTop() > HeaderTop ) {
					$('#menu_block').css({position: 'fixed', top: '0px'});
			}
			else {
					$('#menu_block').css({position: 'absolute', top: '116px'});
			}
		});
	}	

$(window).resize(function(){

 if ($(window).width() > 767) {

	  var HeaderTop = 122; 
		$(window).scroll(function(){
			if( $(window).scrollTop() > HeaderTop ) {
					$('#menu_block').css({position: 'fixed', top: '0px'});
			}
			else {
					$('#menu_block').css({position: 'absolute', top: '116px'});
			}
		});
	}	
	if ($(window).width() < 767) {

	  var HeaderTop = 0; 
		$(window).scroll(function(){
			if( $(window).scrollTop() > HeaderTop ) {
					$('#menu_block').css({position: 'fixed', top: '0px'});
			}
			else {
					$('#menu_block').css({position: 'absolute', top: '0'});
			}
		});
	}	
});	
	
});	
