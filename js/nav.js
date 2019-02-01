$(document).ready(function(){
	
		$('#toggle').click(function(){
		$('#line1').addClass('en1');
		$('#line2').addClass('en2');
		$('#line3').addClass('en3');
		$(this).addClass('clicked');
		$('#nav').addClass('visible');
	});

});