$(function(){
	
	$(".clickopen").unbind().on("click", function (e) {
		$("#preloaderDT").fadeIn();
		var loadpath = $(this).attr('id');
		$('#main').find(".modal-body").empty();
		$('#main').modal('show');
		$('#main').find(".modal-body").load(loadpath + ".html", function (response, status) {
			$("#preloaderDT").fadeOut();
			if (status == "error") {
				$('#main').find(".modal-body").html("not found");
			}
		});
	});

});