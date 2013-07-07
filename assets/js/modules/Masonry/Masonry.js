function Masonry(el, config) {

$(function(){
    var $container = (config.containerDiv) ? $(config.containerDiv) : $('#container');
    $container.imagesLoaded( function(){
      // we use setTimeout to allow other controls to finish loading and sizing before calling masonry
      setTimeout(function() {
        $container.masonry({
          itemSelector : '.box',
          isFitWidth: true
        });
      }, 0);
    });
  });
}

module.exports = function(config) {
  return new Masonry(config.container, config);
};