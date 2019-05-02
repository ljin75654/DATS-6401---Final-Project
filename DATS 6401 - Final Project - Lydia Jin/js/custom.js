jQuery(function($){

	/* 1. Search box slide */
	$('#search-icon').click(function(e){
		e.preventDefault();
     	$('.header-top').slideToggle(500);     
  	});
	
	/* 2. Hover dropdown menu */ 
  	$('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

	/* 3. Bootstrap accordian */ 
	$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-plus-square").addClass("fa-minus-square");
	});
	
	$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-minus-square").addClass("fa-plus-square");
	});	

	/* 4. Skill progress bar */
	$('.progress .progress-bar').progressbar({
		display_text: 'center', percent_format: function(p) {return p + ' %';}});

	/* 5. Mixit slider */  	
	jQuery(function(){
	    $('#mixit-container').mixItUp();
	});
		
	/* 6. Fancybox */
	jQuery(document).ready(function() {
		$(".fancybox").fancybox();
	});	 

	/* 7. Main slider (slick slider) */

	jQuery('.main-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		accessibility: false,
		fade: true,
		cssEase: 'linear'
	});
	
	/* 8. Login modal window */
	$("#signup-btn").on('click', function(e){
		$('#signup-content').show();
		$('#login-content').hide();
		e.preventDefault();		
	});

	$("#login-btn").on('click', function(e){
		$('#login-content').show();
		$('#signup-content').hide();
		e.preventDefault();
				
	});

	/* 9. Counter */ 
	  jQuery('.counter').counterUp({
            delay: 10,
            time: 1000
        });

	/* 10. Testimonial slider (slick slider) */   
	jQuery('.testimonial-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,		
		cssEase: 'linear'
	});

	/* 11. Clients brand slider (slick slider) */   
	$('.clients-brand-slide').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  autoplay: true,	
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	
	/* 12. Scroll top button */
	$(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	});	   

	$('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	});
	
	/* 13. preloader */ 
	
	jQuery(window).load(function() {
      $('#status').fadeOut();
      $('#preloader').delay(100).fadeOut('slow');
      $('body').delay(100).css({'overflow':'visible'});
    })

	/* 14. wow animation */ 
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        live:         true,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init(); 
	
});