$(document).ready(function(){
	$('.head-accordion').click(function(){
		$(this).parent().toggleClass('open');
		return false
	});
});