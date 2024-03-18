var thisDragFrom = '';
var slideIndex = 1;

$(function(){
	
	getAllNft();

	$(".closethis").unbind().on("click", function (e) {
		window.location.hash = "";
		$('#main').find(".modal-body").empty();
		$('#main').modal('hide');
	});

	/* slider */
	showDivs(slideIndex);
	/* slider */

	/* drag & drop */
	$('.drop').on('dragover', function (event) {
		event.preventDefault();
	});
	$('.drag').on('dragstart', function (event) {
		thisDragFrom = $(this).parent().attr('id');
		event.originalEvent.dataTransfer.setData("text", event.target.id);
	});
	$('.drop').on('drop', function (event) {
		event.preventDefault();
		var dragId = event.originalEvent.dataTransfer.getData("text");
		if ($('#' + $(this).attr('id')).children().length == false) {
			var thisDropTo = $(this).attr('id');
			$('#' + dragId).appendTo($(this));
			thisDragId = dragId;
			thisDragId = thisDragId.replace('nft-', '');
			thisDragFrom = thisDragFrom.split('-');
			thisDragFromTeam = thisDragFrom[1];
			thisDragFromSlot = thisDragFrom[2];
			thisDropTo = thisDropTo.split('-');
			thisDropToTeam = thisDropTo[1];
			thisDropToSlot = thisDropTo[2];
			console.log('thisDragId: ' + thisDragId);
			console.log('thisDragFromTeam: ' + thisDragFromTeam);
			console.log('thisDragFromSlot: ' + thisDragFromSlot);
			console.log('thisDropToTeam: ' + thisDropToTeam);
			console.log('thisDropToSlot: ' + thisDropToSlot);

			// delete old position
			// update new position
		} else {
			$('#' + dragId).css({ 'display': 'none', 'background-color': '#eee1d2', 'border-radius': '8px' }).fadeIn(function () {
				$(this).css({
					'background-color': 'transparent',
					'-webkit-transition': 'background-color 529ms linear',
					'-ms-transition': 'background-color 529ms linear',
					'transition': 'background-color 529ms linear'
				});
			});
		}
	});
	/* drag & drop */

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

function getAllNft() {
	var thisAjaxData = [
		{
			'nft_id': 1,
		},
		{
			'nft_id': 2,
		},
		{
			'nft_id': 3,
		},
		{
			'nft_id': 4,
		},
		{
			'nft_id': 5,
		},
		{
			'nft_id': 6,
		},
		{
			'nft_id': 7,
		},
		{
			'nft_id': 8,
		},
		{
			'nft_id': 9,
		},
		{
			'nft_id': 10,
		},
	];
	if (thisAjaxData.length > 0) {
		for (i = 0; i < thisAjaxData.length; i++) {
			$('#drop-team0-' + (pad((i + 1), 5))).html('<div id="nft-' + (pad(thisAjaxData[i].nft_id, 5)) + '" class="drag nft-small-card" style="background-image: url(\'images/nft/small/nft-small-card-' + (pad(thisAjaxData[i].nft_id, 5)) + '.png\')" draggable="true">LV. 1</div>');
		}
	}
}