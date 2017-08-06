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


});

function initMap() {
var myLatlng = new google.maps.LatLng(-27.4314157, 153.0330532);
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -27.4302157, lng: 153.0408532},
  zoom: 16,
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
	                "color": "#000000"
	            },
	            {
	                "lightness": 17
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
audiojs.events.ready(function() {
	audiojs.createAll();
});
