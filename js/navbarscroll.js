(function ($) {
  $(document).ready(function(){
	$(".navbar").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() >= $(window).height()-50) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
});
  }(jQuery));