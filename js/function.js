var token = '0x3d3A9926CaR458D0e5D594Fb8aBf1D10A6104391';

$(function () {
	setTimeout(function () {
		sceneResize();
	});
	$(window).resize(function () {
		setTimeout(function () {
			sceneResize();
		});
	});

});

function sceneResize() {
	if ($(window).width() > $(window).height()) {
		aspectRatio = 16 / 9;
		orientation = 'landscape';
		$('.content-area-portrait').css({ 'display': 'none' });
		$('.content-area-landscape').css({ 'display': 'block' });
		if ($(window).width() / $(window).height() < aspectRatio) {
			zoomRatio = $(window).width() / 1920;
			$('body > *').css({ 'zoom': zoomRatio });
			$('body > *').css({ 'margin-top': (($(document).height() - (1080 * zoomRatio)) / (2 * zoomRatio)) + 'px' });
		} else {
			zoomRatio = $(window).height() / 1080;
			$('body > *').css({ 'zoom': zoomRatio });
		}
	} else {
		aspectRatio = 9 / 16;
		orientation = 'portrait';
		$('.content-area-landscape').css({ 'display': 'none' });
		$('.content-area-portrait').css({ 'display': 'block' });
		if ($(window).width() / $(window).height() < aspectRatio) {
			zoomRatio = $(window).width() / 1080;
			$('body > *').css({ 'zoom': zoomRatio });
		} else {
			zoomRatio = $(window).height() / 1920;
			$('body > *').css({ 'zoom': zoomRatio });
			$('body > *').css({ 'margin-top': '0px' });
		}
	}
}

function pad(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}