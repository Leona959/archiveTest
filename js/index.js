$(function(){
	
	$(".clickopen").unbind().on("click", function (e) {
		$("#preloaderDT").fadeIn();
		var loadpath = $(this).attr('id');
		$('#GunFire').find(".modal-body").empty();
		$('#GunFire').modal('show');
		$('#GunFire').find(".modal-body").load(loadpath + ".php", function (response, status) {
			$("#preloaderDT").fadeOut();
			if (status == "error") {
				$('#GunFire').find(".modal-body").html("not found");
			}
		});
	});

	$(".closethis").unbind().on("click", function (e) {
		window.location.hash = "";
		$('#GunFire').find(".modal-body").empty();
		$('#GunFire').modal('hide');
	});

});