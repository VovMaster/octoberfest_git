$(document).ready(function(){
	$('.head-accordion').click(function(){
		$(this).parent().toggleClass('open');
		return false
	});


	$('.video-link[data-vimeo]').click(function(){
		var thisVimeo = $(this).attr('data-vimeo');
		$('<div class="video-wrap"><div class="video-content"><div class="iframe-content"><div class="video-close"></div> <iframe src="https://player.vimeo.com/video/' + thisVimeo + '?autoplay=1" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div></div></div>').appendTo($('body'));
		return false
	});

	$('.video-link[data-youtobe]').click(function(){
		var thisYoutobe = $(this).attr('data-youtobe');
		$('<div class="video-wrap"><div class="video-content"><div class="iframe-content"><div class="video-close"></div> <iframe width="560" height="315" src="https://www.youtube.com/embed/' + thisYoutobe + '?rel=0&autoplay=1" frameborder="0"  allowfullscreen></iframe> </div></div></div>').appendTo($('body'));
		return false
	});

	$('body').on('click', '.video-close', function(){
		$('.video-wrap').remove();
		return false
	});

	// $('.submenu a[href^="#"]').click(function(){
	// 	var thisHref = $(this).attr('href');

	// 	if($(window).width() > 767) {
	// 		$('html, body').scrollTop( $(thisHref).offset().top  - 100) ;
	// 		return false
	// 	}
	// });

	var anc = window.location.hash;

	if (anc.length  > 0 && anc != '#form-sign') {
		if($(window).width() > 767) {
			$('html, body').scrollTop( $(anc).offset().top  - 100) ;
		
		}
	}


	document.documentElement.onkeydown=function(e) {
	    if (!e) {e=window.event}
	    if (e.keyCode=="27") {
	    	$('.video-wrap').remove();
	    }
	}

	$('.slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,	  
		fade: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 4,
		    slidesToScroll: 4,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});




	function scrollHeader(thisScroll, loadingPage) {
		
		if(loadingPage){
			$('.main-header').before($('.main-header').clone().addClass('fixed-header'));
			$('.btn-ticket').before($('.btn-ticket').clone().addClass('btn-ticket-fixed'));
		}

		if(thisScroll > 300) {
			$('.fixed-header').addClass('fixed-header-open');
			$('.btn-ticket-fixed').addClass('btn-ticket-open');
		}else {
			$('.fixed-header').removeClass('fixed-header-open');
			$('.btn-ticket-fixed').removeClass('btn-ticket-open');
		}
	}

	if($(window).width() > 767) {

		scrollHeader($(window).scrollTop(), true);

		$(window).scroll(function(){
			scrollHeader($(window).scrollTop(), false);
		});

	}


	$('.main-nav-btn').click(function(){
		$('html').toggleClass('open-menu');
	});

	$('.down').click(function(){
		var scrollDown = $('.bg-large-img').offset().top - 70;
		$('html, body').animate({
			scrollTop: scrollDown
		}, '400');
		return false 
	});


});



function initMap() {


	var latCord = -35.2961067;
	var lngCord = 149.1311257;

	var latCordCenter = latCord + 0.0012;
	var lngCordCenter = lngCord + 0.0168;



var myLatlng = new google.maps.LatLng(latCord, lngCord);
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: latCordCenter, lng: lngCordCenter}, 
  zoom: 15,
  scrollwheel: false,
  styles: [
	    {
	        "featureType": "all",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "saturation": 36
	            },
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 40
	            }
	        ]
	    },
	    {
	        "featureType": "all",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 16
	            }
	        ]
	    },
	    {
	        "featureType": "all",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 20
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 17
	            },
	            {
	                "weight": 1.2
	            }
	        ]
	    },
	    {
	        "featureType": "administrative.locality",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "lightness": "37"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 20
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 21
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 17
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 29
	            },
	            {
	                "weight": 0.2
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 18
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 16
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 19
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "10"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#cccccc"
	            },
	            {
	            	"saturation": "0",
	                "lightness": 0
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "saturation": "-100"
	            },
	            {
	                "lightness": "-100"
	            }
	        ]
	    }
	]
});


var goldStar = "images/logo.png"
var marker = new google.maps.Marker({
  position: myLatlng,
  icon: goldStar,
  map: map
});
}

$(document).ready(function(){


	function scrollsubmenu(thisScroll, loadingPage) {
		
		if(loadingPage){
			$('.submenu').before($('.submenu').clone().addClass('fixed-submenu').addClass('second-submenu'));
		}
		var positionSub = $('.submenu:not(.second-submenu)').offset().top - 108;

		if(thisScroll > positionSub) {
			$('.fixed-submenu').addClass('fixed-submenu-open');
		}else {
			$('.fixed-submenu').removeClass('fixed-submenu-open');
		}
	}

	if($(window).width() > 767) {

		scrollsubmenu($(window).scrollTop(), true);

		$(window).scroll(function(){
			scrollsubmenu($(window).scrollTop(), false);
		});

		
		// Cache selectors
		var lastId,
		    topMenu = $(".submenu"),
		    topMenuHeight = topMenu.outerHeight()+15,
		    // All list items
		    menuItems = topMenu.find("a"),
		    // Anchors corresponding to menu items
		    scrollItems = menuItems.map(function(){
		      var item = $($(this).attr("href"));
		      if (item.length) { return item; }
		    });

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
			var href, offsetTop;
			if($(this).attr("href") == '#die-deets') {
			  href = $(this).attr("href"),
			      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight-100;
		   }else {
			   	href = $(this).attr("href"),
			      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight-80;
		   }
		  $('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 300);
		  e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function(){
		   // Get container scroll position
		   var heightWin = $(window).height() / 2;
		   var fromTop = $(this).scrollTop() + heightWin;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("current")
		         .end().filter("[href='#"+id+"']").parent().addClass("current");
		   }                   
		});

	}else {
		$('.submenu a[href^="#"]').click(function(){
			var thisHref = $(this).attr('href');

			if($(window).width() > 767) {
				$('html, body').scrollTop( $(thisHref).offset().top  - 100) ;
				return false
			}
		});
	}



});

