jQuery(function(){
 	$("#alerts").on('hidden.bs.modal', function (e) {
 		$("#settings").modal("show");
 	});
 	$("#show-settings").click(function(){
 		$("#alerts").modal("hide")
 	})


	$(".hover").mouseleave(
		function () {
		  $(this).removeClass("hover");
		}
	);
 	
})