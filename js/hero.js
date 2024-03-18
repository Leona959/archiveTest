$(function(){
	
	setTimeout(function () {
		getAllNft();
		$('.nft-small-card').on('click', function () {
			thisId = $(this).attr('id');
			thisId = thisId.replace('nft-', '');
			getNftDetail(thisId);
		});
	});

	$(".closethis").unbind().on("click", function (e) {
		window.location.hash = "";
		$('#main').find(".modal-body").empty();
		$('#main').modal('hide');
	});

	$('.hero-levelup-button').on('click', function () {
		$('#confirmMessage').html('<div>ARE YOU SURE TO LEVELUP</div>');
		$('#confirmBox').modal('show');
	});
	$('.hero-upgrade-button').on('click', function () {
		$('#confirmMessage').html('<div>ARE YOU SURE TO UPGRADE</div>');
		$('#confirmBox').modal('show');
	});

});

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
			$('#drop-team0-' + (pad((i + 1), 5))).html('<div id="nft-' + (pad(thisAjaxData[i].nft_id, 5)) + '" class="nft-small-card" style="background-image: url(\'images/nft/small/nft-small-card-' + (pad(thisAjaxData[i].nft_id, 5)) + '.png\')">LV. 1</div>');
			if (i == 0) {
				getNftDetail((pad(thisAjaxData[i].nft_id, 5)));
			}
		}
	}
}

function getNftDetail(nft_number_pad) {
	var thisAjaxData = [
		{
			'nft_level': '1',
			'nft_hp': '120',
			'nft_atk': '88',
			'nft_armor': '68',
			'nft_crit': '33',
			'nft_magicpower': '88',
			'nft_magicresist': '67',
			'nft_block': '76',
			'nft_sta': '28/100',
		},
	];
	$('.nft-avatar-card').css({ 'background-image': "url('images/nft/avatar/nft-avatar-card-" + nft_number_pad + ".png')", 'display': 'none' }).fadeIn();
	$('.nft-level-area').text(thisAjaxData[0].nft_level);
	$('.nft-hp-area').text(thisAjaxData[0].nft_hp);
	$('.nft-atk-area').text(thisAjaxData[0].nft_atk);
	$('.nft-armor-area').text(thisAjaxData[0].nft_armor);
	$('.nft-crit-area').text(thisAjaxData[0].nft_crit);
	$('.nft-magicpower-area').text(thisAjaxData[0].nft_magicpower);
	$('.nft-magicresist-area').text(thisAjaxData[0].nft_magicresist);
	$('.nft-block-area').text(thisAjaxData[0].nft_block);
	$('.nft-sta-area').text(thisAjaxData[0].nft_sta);
}