window.addEvent('domready', function() {
	//--horizontal
	var myHorizontalSlide = new Fx.Slide('horizontal_slide', {mode: 'horizontal'}).hide();

	$('h_toggle').addEvent('click', function(e){
		e.stop();
		myHorizontalSlide.toggle();
	});
});