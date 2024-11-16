
(function ($) {
"use strict";


// sticky
	var wind = $(window);
	var sticky = $("#sticky-header");
	wind.on("scroll", function () {
	var scroll = wind.scrollTop();
	if (scroll < 100) {
		sticky.removeClass("sticky animated slideInDown");
	} else {
		sticky.addClass("sticky animated slideInDown");
	}
	});

	
// Mouse Follower
	const follower = document.querySelector(
		".mouse-follower .cursor-outline"
	);
	const dot = document.querySelector(".mouse-follower .cursor-dot");
	window.addEventListener("mousemove", (e) => {
		follower.animate(
			[
				{
					opacity: 1,
					left: `${e.clientX}px`,
					top: `${e.clientY}px`,
					easing: "ease-in-out",
				},
			],
			{
				duration: 3000,
				fill: "forwards",
			}
		);
		dot.animate(
			[
				{
					opacity: 1,
					left: `${e.clientX}px`,
					top: `${e.clientY}px`,
					easing: "ease-in-out",
				},
			],
			{
				duration: 1500,
				fill: "forwards",
			}
		);
	});

	// Mouse Follower Hide Function
	$("a, button").on("mouseenter mouseleave", function () {
		$(".mouse-follower").toggleClass("hide-cursor");
	});

	var terElement = $(
		"h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six"
	);
	$(terElement).on("mouseenter mouseleave", function () {
		$(".mouse-follower").toggleClass("highlight-cursor-head");
		$(this).toggleClass("highlight-cursor-head");
	});

	var terElement = $("p");
	$(terElement).on("mouseenter mouseleave", function () {
		$(".mouse-follower").toggleClass("highlight-cursor-para");
		$(this).toggleClass("highlight-cursor-para");
	});




	//tesit list One about inner
	$('.testi-list').owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 1000,
	dots: true,
	margin: 20,
	nav: true,
	navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
	responsive: {
		0: {
			items: 1
		},
		480: {
			items: 1
		},
		600:{
			items:1
		},
		768: {
			items: 1
		},
		992: {
			items: 1
		},
		1000: {
			items: 1
		},
		1920: {
			items: 4
		}
	}
	}) 

// video popup
	$(".video-popup").magnificPopup({
		type: "iframe",
		callbacks: {},
	});


	/*faqs*/
	$(document).ready(function() {
		$(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
		$(".faq-question").on("click", function(){
		if( $(this).parent().hasClass("active") ){
			$(this).next().slideUp();
			$(this).parent().removeClass("active");
		}
		else{
			$(".faq-answer").slideUp();
			$(".faq-singular").removeClass("active");
			$(this).parent().addClass("active");
			$(this).next().slideDown();
		}
		});
	});

	  

	//Brand One About inner
	$('.brand-list').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 1000,
		dots: false,
		nav: false,
		margin: 30,
		navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			600:{
				items:2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1000: {
				items: 5
			},
			1920: {
				items: 5
			}
		}
	}) 
	





	// scroll up
    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }



})(jQuery); // End jQuery





