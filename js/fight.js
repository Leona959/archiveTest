$(function(){

	$(".closethis").unbind().on("click", function (e) {
		window.location.hash = "";
		$('#main').find(".modal-body").empty();
		$('#main').modal('hide');
	});

});