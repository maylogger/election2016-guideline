if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  var doc = $(document);
  var body = $('body');
  var page = $('.page');
  var desktop_breakpoint = 960;
  body.addClass('scale-content');

  $(window).on('scroll', function(){
    var scrolling = doc.scrollTop();
    var touch_bottom = body.height() - $(window).height();
    if (scrolling >= touch_bottom) {
      var viewport_width = $(window).width();
      if (viewport_width >= desktop_breakpoint) {
        var x = -($(window).height() * 0.8) + 'px';
        page.css('transform', 'translateY('+x+')');
        body.addClass('is-scaled');
      }
    } else {
      body.removeClass('is-scaled');
      page.css('transform', 'translateY(0)');
    }
  });

  $(window).resize(function() {
    var viewport_width = $(window).width();
    if (viewport_width < desktop_breakpoint) {
      body.removeClass('scale-content');
      page.css('transform', 'translateY(0)');
    } else {
      body.addClass('scale-content');
    }
  });

}

