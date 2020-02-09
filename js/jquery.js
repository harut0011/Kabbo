console.log('jquery.js is successfully loaded')
// go to top button
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('#gotop').fadeIn();
		} else {
			$('#gotop').fadeOut();
		}
	});
	$('#gotop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});