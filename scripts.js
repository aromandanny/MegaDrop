$(function(){
	$('.animated > li').hover(function(){
		$(this).find('.container-4').stop().slideDown('fast');
	},
	function(){
		$(this).find('.container-4').stop().slideUp('slow');
	});
});

