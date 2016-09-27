
jQuery(function(){
	$("#alerts").on('hidden.bs.modal', function (e) {
		$("#settings").modal("show");
	});
	$("#show-settings").click(function(){
		$("#alerts").modal("hide")
	})
	
})