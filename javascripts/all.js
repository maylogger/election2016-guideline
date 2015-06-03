if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  var target = $('body');
  var translate_target = $('.page');
  var desktop_breakpoint = 960;
  target.addClass('scale-content');

  $(window).on('scroll', function(){
    var target_scrolltop = target.scrollTop();
    var target_offsettop = target[0].offsetHeight - $(window).height();
    if (target_scrolltop == target_offsettop) {
      var viewport_width = $(window).width();
      if (viewport_width >= desktop_breakpoint) {
        var x = -($(window).height() * 0.8) + 'px';
        translate_target.css('transform', 'translateY('+x+')');
        target.addClass('is-scaled');
      }
    } else {
      target.removeClass('is-scaled');
      translate_target.css('transform', 'translateY(0)');
    }
  });

  $(window).resize(function() {
    var viewport_width = $(window).width();
    if (viewport_width < desktop_breakpoint) {
      target.removeClass('scale-content');
      translate_target.css('transform', 'translateY(0)');
    } else {
      target.addClass('scale-content');
    }
  });

}

