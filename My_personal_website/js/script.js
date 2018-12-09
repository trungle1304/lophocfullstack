new WOW().init();
$(document).ready(function(){
	$('#slider-show ul li').css({display: 'block'});
	$('#slider-show ul').slick({
		dots: false,		//chấm next, prev
		infinite: true,		// lặp vô hạn
		arrows: false,  // custom nút next, prev (bấm vào nút ta tạo ra, vẫn có thể next, prev)
		speed: 2000,
		fade: true,		// opacity
		autoplay: true,	//autoplay
		autoplaySpeed: 3000,
		slidesToShow: 1,
	});
	// $('#slider-show ul').animate({ opacity: 1});

	$('#slider-next').click(function(event){
		event.preventDefault();  // click vào thẻ a, đang để # thì k dẫn đi đâu, sd cái này thì ko cho event lz nữa, có nghĩa nó k chạy lại trang do dùng #
		$('#slider-show ul').slick('slickNext');
	});

	$('#slider-prev').click(function(event){
		event.preventDefault();  // click vào thẻ a, đang để # thì k dẫn đi đâu, sd cái này thì ko cho event lz nữa, có nghĩa nó k chạy lại trang do dùng #
		$('#slider-show ul').slick('slickPrev');
	});

	// var lastScrollTop = 0;
	// $(window).scroll(function(event){
	// 	var currentTop = $(this).scrollTop();
	// 	if (currentTop > lastScrollTop){
	// 		autoHideNavThemes('up');
	// 	} else {
	// 		autoHideNavThemes('down');
	// 	}
	// 	lastScrollTop = currentTop;
	// });

	// function autoHideNavThemes(scrollNavBar){
	// 	var navThemesHeight= $('#themes-top').height();
	// 	if(scrollNavBar=='down'){
	// 		$('#header').animate({top: '0px'},1000);
	// 	}

	// 	else{
	// 		$('#header').animate({top: '40px'},1000);
	// 	}
	// }
})