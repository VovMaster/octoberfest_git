$(document).ready(function(){
	$('.head-accordion').click(function(){
		$(this).parent().toggleClass('open');
		return false
	});

	$('.video-link').click(function(){
		var thisYoutobe = $(this).attr('data-youtobe');
		$('<div class="video-wrap"><div class="video-content"><div class="iframe-content"><div class="video-close"></div> <iframe width="560" height="315" src="https://www.youtube.com/embed/' + thisYoutobe + '" frameborder="0" allowfullscreen></iframe> </div></div></div>').appendTo($('body'));
		return false
	});

	$('body').on('click', '.video-close', function(){
		$('.video-wrap').remove();
		return false
	});


	document.documentElement.onkeydown=function(e) {
	    if (!e) {e=window.event}
	    if (e.keyCode=="27") {
	    	$('.video-wrap').remove();
	    }
	}


});
audiojs.events.ready(function() {
	audiojs.createAll();
});