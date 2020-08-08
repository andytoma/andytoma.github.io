$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:1,
		autoplay:true,
		speed:2000,
		autoplaySpeed:3000,
	});
});

$(document).ready(function(){
	$('.slider__our__community').slick({
		arrows:true,
		slidesToShow:2,
		autoplay:true,
		speed:2000,
		autoplaySpeed:3000,
		responsive:[
			{
				breakpoint: 991,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

