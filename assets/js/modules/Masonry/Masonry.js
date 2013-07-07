function Masonry(el, config) {

	$(document).on('ControlsReady', function(e){
		var $container = (config.containerDiv) ? $(config.containerDiv) : $('#container'),
				options = {
					itemSelector : config.itemSelector || '.box',
	        isFitWidth: config.isFitWidth || true
				};

		$(function(){
	    $container.imagesLoaded( function(){
	      // we use setTimeout to allow other controls to finish loading and sizing before calling masonry
	      setTimeout(function() {
	        $container.masonry(options);
	      }, 0);
	    });
	  });

	});

}



module.exports = function(config) {
  return new Masonry(config.container, config);
};