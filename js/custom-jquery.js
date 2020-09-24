$(document).ready(function(){
$(".search-button").click(function(){
  $(".search-bar-input").addClass("open-search-bar")
    });
    $('.client-slider11').slick({
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
    responsive: [
      {
        arrows:false,
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
  $('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});         
  $('.menu li').hover(function() {
    $(this).find('.drop-down1').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.drop-down1').stop(true, true).delay(200).fadeOut(500);
  });
 
  $('.marketting-slider').slick({

    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    infinite: false,
responsive: [
  {
    arrows:false,
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }
]
  });


  $('.logo-carousel').slick({

    arrows:false,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,

    infinite: false,
    infinite: true,
responsive: [
  {
    arrows:false,
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }
]
  })

});
    
