//fancyBox script for all gallery's

$(document).ready(function() {
	$('#gallery a').fancybox({
			overlayColor: '#9a9a9a',							// due to the color of the background
			overlayOpacity: .3, 								// this setting can be hard to see 
			transitionIn: 'elastic',							
			transitionOut: 'elastic',
			easingIn: 'easeInSine',
			easingOut: 'easeOutSine',
			titlePosition: 'outside',
			cyclic: true
	}); //end fancybox

	$('#gallery img').each(function() {
		var imgFile = $(this).attr('src');
		var preloadImage = new Image();
		var imgExt = /(\.\w{3,4}$)/;
		preloadImage.src = imgFile.replace(imgExt,'$1');
	}); //end each
}); //end ready


 
 
