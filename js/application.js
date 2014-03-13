(function($){
  $(function(){
    var slider  = $('.js-simple-slider'),
        speed   = 100,
        step    = - slider.find('li:first-child').width();

    slider.find('.js-next').click(function(e) {
      e.preventDefault();
      slider.find('li:first-child').animate({marginLeft: step}, speed, function(){ slider.find('li:first-child').appendTo(slider.find('ul')).removeAttr('style') });
    });

    slider.find('.js-prev').click(function(e) {
      e.preventDefault();
      slider.find('li:last-child').prependTo(slider.find('ul')).css({marginLeft: step}).animate({marginLeft: '0px'}, speed, function(){ slider.find('li:last-child').removeAttr('style')} );
    });
  });   
})(jQuery);