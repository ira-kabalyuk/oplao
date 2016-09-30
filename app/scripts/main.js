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