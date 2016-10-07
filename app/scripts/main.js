jQuery(function(){
 	$("#show-settings").click(function(){
	 	var alerts = $("#alerts");
	 	alerts.on('hidden.bs.modal', function (e) {
	 		$("#settings").modal("show");
	 		alerts.off('hidden.bs.modal');
	 	});
 		alerts.modal("hide")
 	})


	$(".hover").mouseleave(
		function () {
		  $(this).removeClass("hover");
		}
	);

	$('#alerts, #settings').on('show.bs.modal', function() {
		var pad = measureScrollbar();
		$('#menu_block').css({'width': '+=0'});
	})

	$('#alerts, #settings').on('hidden.bs.modal', function() {
		$('#menu_block').css('width', '100%');
	})
 	
})

function measureScrollbar() {
    var $body = $(document.body)
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    $body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    $body[0].removeChild(scrollDiv)
    return scrollbarWidth
}



 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab-pane").hide();
    if($("ul.tabs li").first().is(':visible')) {
    	$(".tab-pane:first").show();
    }

  /* if in tab mode */
    $("ul.tabs li").click(function() {
      var activeTab = $(this).attr("rel");
      $(".tab-pane").hide();
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tabs_item").removeClass("d_active");
	  $(".tabs_item[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tabs_item").click(function() {
      	var d_activeTab = $(this).attr("rel"); 
      	if($("#"+d_activeTab).is(':visible')){
      		$("#"+d_activeTab).slideUp();
      		$(this).removeClass('d_active');
			return;
		}
		$(".tab-pane").slideUp();
		$("#"+d_activeTab).slideDown();

		$(".tabs_item").removeClass("d_active");
		$(this).addClass("d_active");

		$("ul.tabs li").removeClass("active");
		$("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });

    $(".tab_content .close_block").click(function(){	
		$(".tab-pane").slideUp("slow");				
	});	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
