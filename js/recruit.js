$(function(){

	$(".closethis").unbind().on("click", function (e) {
		window.location.hash = "";
		$('#main').find(".modal-body").empty();
		$('#main').modal('hide');
	});
	
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

	$('.recruit-hire1').on('click', function () {
		$('#confirmMessage').html('<div>ARE YOU SURE TO USE 100 DIAMOND TO RECRUIT ONCE?</div>');
		$('#confirmBox').modal('show');
	});
	$('.recruit-hire10').on('click', function () {
		$('#confirmMessage').html('<div>ARE YOU SURE TO USE 1000 DIAMOND TO RECRUIT 10 TIMES?</div>');
		$('#confirmBox').modal('show');
	});

});