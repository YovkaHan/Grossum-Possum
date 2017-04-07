(function($){
	var mvOn = false;
	require('script!../../node_modules/jquery-placeholder/jquery.placeholder.js');
	$(document).ready( function() { // $(window).ready --IE8
		if($('html').hasClass('no-placeholder')) {
			$('input').placeholder();
		}
		mvOn = ($(window).width() <= 767) ? false : true;
		
		checkView();
		
		$(window).on('resize', function(){
			checkView();
		});
	});
	
			function checkView() {
				if($(window).width() <= 767 && !mvOn) {
					mvOn = true;
					mobileView(mvOn)
				} else if ($(window).width() > 767 && mvOn) {
					mvOn = false;
					mobileView(mvOn)
				}
			}
			
	function mobileView(switcher){
		
		if(switcher) {
			$('header .title').addClass('fs-36px');
			$('.eBook-form .eBook-title').removeClass('text-right');
			
			/* ABOUT BLOCK */
			
			$('.about-block .about-block-title').addClass('fs-36px');
			$('.about-block').addClass('auto-width');
			$('.about-block .row .first-row').removeClass('text-left').addClass('text-center');
			$('.about-block .row .third-row').removeClass('text-right').addClass('text-center');
			//$('.about-block #values').attr('dir', 'auto');
			var lists = $('.about-block #values .slashes');
			lists.map = [].map;
			lists.map(function(item){
				$(item).remove();
			});
			
			/* FOOTER BLOCK */
			
			//$('.footer-block-socials .btn').removeClass('trnspnt-bg');
		} else {
			$('header .title').removeClass('fs-36px');
			$('.eBook-form .eBook-title').addClass('text-right');
			/* ABOUT BLOCK */
			$('.about-block .about-block-title').removeClass('fs-36px');
			$('.about-block').removeClass('auto-width');
			$('.about-block .row .first-row').removeClass('text-center').addClass('text-left');
			$('.about-block .row .third-row').removeClass('text-center').addClass('text-right');
			var lists = $('.about-block #values').children();
			lists.forEach = [].forEach;
			lists.forEach(function(item,i,arr){
				if(arr.length - i == 1){
					
				} else {
					$(item).append( "<span class='slashes'>&nbsp;//</span>" );
				}
			});
			//$('.about-block #values').attr('dir', 'rtl');
			
			/* FOOTER BLOCK */
			
			//$('.footer-block-socials .btn').addClass('trnspnt-bg');
		}

	}
	
	
})(jQuery);