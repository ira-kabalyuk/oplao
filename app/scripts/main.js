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
 	
})