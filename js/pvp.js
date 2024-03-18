var slideIndex = 1;

$(function(){

	$(".closethis").unbind().on("click", function (e) {
		window.location.hash = "";
		$('#main').find(".modal-body").empty();
		$('#main').modal('hide');
	});

	/* slider */
	showDivs(slideIndex);
	/* slider */
	
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

function plusDivs(n) {
	showDivs(slideIndex += n);
}
function showDivs(n) {
	if(n > $('.team-list-item').length){ slideIndex = 1 }
	if(n < 1){ slideIndex = $('.team-list-item').length }
	$('.team-list-item').css({'display': 'none'});
	$('.team-list-item').eq(slideIndex - 1).fadeIn(529);
}