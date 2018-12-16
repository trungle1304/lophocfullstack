$(document).ready(function(){
	$('#humberger-menu').click(function(){
		$(this).css("display","none");
		$('#times-close').css("display","block");
		$('#times-close > i').removeClass('run-rotate');
		$('#times-close > i').toggleClass('run-rotate');
		$("#mobile-nav").removeClass("close");
		$('#mobile-nav').toggleClass('open');
		$('#page').toggleClass('menu-is-open');
	});
	$('#times-close').click(function(){
		$(this).css("display","none");
		$('#humberger-menu').css("display","block");
		$('#humberger-menu > i').removeClass('run-rotate');
		$('#humberger-menu > i').toggleClass('run-rotate');
		$("#mobile-nav").removeClass("open");
		$('#mobile-nav').toggleClass('close');
		$('#page').toggleClass('menu-is-open');
	})
});