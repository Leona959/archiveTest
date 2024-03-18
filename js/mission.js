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

	$('.mission-explore').on('click', function () {
		$('#confirmMessage').html('<div>ARE YOU SURE TO DO THIS TASK?</div>');
		$('#confirmBox').modal('show');
	});
	$('.mission-drill').on('click', function () {
		$('#confirmMessage').html('<div>ARE YOU SURE TO DO THIS TASK?</div>');
		$('#confirmBox').modal('show');
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