$(document).ready(function() {
	//header - hidden menu
	$('.menu').click(function() {
		if (!$('#main_nav').hasClass('active_menu')) {
			$('#main_nav').addClass('active_menu');
			$('.active_menu').hide().slideDown(400);
		} else {
			$('.active_menu').slideUp(400);
			function active_menu() {
				$('#main_nav').removeClass('active_menu');
			} setTimeout(active_menu, 400);
		};
	});
	
	//nav <= 768 hide on click
	$(document).click(function(event){
		var viewportWidth = $(window).outerWidth();
		if (viewportWidth <= 768) {
			if (!$(event.target).closest('#main_header, .active_menu, #main_nav').length) {
				$('#main_nav').slideUp(400);
				function active_menu() {
					$('#main_nav').removeClass('active_menu');
				} setTimeout(active_menu, 400);
			}
		}
	});	

	//nav > 768 hide on click
	$(window).on('load, resize', function mobileViewUpdate() {
		var viewportWidth = $(window).outerWidth();
		if (viewportWidth > 768) {
			$('#main_nav').show();
		}
	});

	//nav scroll
	$('nav a').click(function(){
		var $href = $(this).attr('href');
		var $anchor = $($href).offset();
		var viewportWidth = $(window).outerWidth();
		if (viewportWidth > 768) {
			$('body').animate({ scrollTop: $anchor.top - $('#main_header').outerHeight()}, 1000);
		} else {
			$('body').animate({ scrollTop: $anchor.top + $('#main_nav').outerHeight() - $('#main_header').outerHeight()}, 1000);
		}
		$('.active_menu').slideUp(300);
		function active_menu() {
			$('#main_nav').removeClass('active_menu');
		} setTimeout(active_menu, 300);
	});

	//nav fixed
	$(window).scroll(sticky_nav());
	sticky_nav();
	function sticky_nav() {
	  var headerOffset = $('#main_header').offset().top;
	  var scrollPos = $(window).scrollTop();
	  $('#main_header').wrap('<div class="nav-placeholder"></div>');
	  $(".nav-placeholder").height($('#main_header').outerHeight());
	  if (scrollPos >= headerOffset) {
	    $('#main_header').addClass('fixed');  
	  } else {
	    $('#main_header').removeClass('fixed');
	  }
	}

	//banner - full height banner
	/*var winHeight = $(window).height() - $('#banner').offset().top;
	$('#banner').css('height', winHeight);

	$(window).on('scroll', function(){
		if ($(window).scrollTop() >= winHeight){
			$('#banner').css('height', 'initial');
		}
	});*/

	//scroll down
	$('.scroll_down').click(function() {
		var portfolioPos = $('#portfolio').offset().top;
		$('body, html').animate({scrollTop: portfolioPos - $('#main_header').outerHeight()}, 800);
	});

	//portfolio - filter
	$('.icon[data-design] a').attr('data-lightbox', 'set-all');
	$('.filter li[data-design]').click(function() {
		var design = $(this).data().design;
		if (design == 'all') {
			$('.icon[data-design]').show();
			$('.icon[data-design] a').attr('data-lightbox', 'set-all');
			$('li[data-design='+ design +']').addClass('active');
			$('li[data-design!='+ design +']').removeClass('active');
		} else {
			$('.icon[data-design='+ design +']').show();
			$('.icon[data-design='+ design +'] a').attr('data-lightbox', 'set-all');
			$('li[data-design='+ design +']').addClass('active');

			$('.icon[data-design!='+ design +']').hide();
			$('.icon[data-design!='+ design +'] a').removeAttr('data-lightbox', 'set-all');
			$('li[data-design!='+ design +']').removeClass('active');

		}
	});

	//lightbox
	$('.icon').mouseenter(function() {
		$('.inner_all', this).fadeIn(400);
	});
	$('.icon').mouseleave(function() {
		$('.inner_all', this).fadeOut(400);
	});

	//contact - inner social
	$('.img').mouseenter(function() {
		$('.inner_social', this).fadeIn(500);
	});
	$('.img').mouseleave(function() {
		$('.inner_social', this).fadeOut(500);
	});

	//footer - scroll up
	$('.js-footer__btn').click(function() {
		$('body, html').animate({scrollTop: 0}, 800);
	});

	//plugins
	lightbox.option({
		'positionFromTop': 200
	});
	$(".owl-carousel").owlCarousel({
		responsiveClass:true,
		mouseDrag: true,
		nav: true,
		responsive:{
		        0:{
		            items:1,
		            loop: true
		        },
		        350:{
		            items:2,
		            loop: true
		        },
		        600:{
		            items:3,
		            loop: false,
		            nav: false
				}
		    }
	});
});