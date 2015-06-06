window.addEvent('domready', function() {
	
	//create our Accordion instance
	var myAccordion = new Accordion($('accordion'), 'h3.ins-toggler', 'div.ins-box', {
		opacity: false,
		onActive: function(toggler, element){
			toggler.setStyles
			({
			background: 'white',
			color: '#24618E'
			});
		},
		onBackground: function(toggler, element){
			toggler.setStyles
			({
			background: 'none',
			color: 'white'
			});
		}
	});
	
	//make it open on hover
	$$('h3.ins-toggler').addEvent('mouseenter', function() { this.fireEvent('click'); });
});