if(Modernizr.csstransitions && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  var doc = $(document);
  var body = $('body');
  var page = $('.page');
  var desktop_breakpoint = 960;
  body.addClass('scale-content');

  $(window).on('scroll', function(){
    var scrolling = doc.scrollTop();
    var touch_bottom = body.height() - $(window).height() - $('.site-info').outerHeight();
    if ( scrolling >= touch_bottom ) {
      var viewport_width = $(window).width();
      if (viewport_width >= desktop_breakpoint) {
        push_page();
      }
    } else {
      reset_page();
    }
  });

  $(window).resize(function() {
    var scrolling = doc.scrollTop();
    var touch_bottom = body.height() - $(window).height() - $('.site-info').outerHeight();
    var viewport_width = $(window).width();
    if (viewport_width < desktop_breakpoint ) {
      body.removeClass('scale-content');
      reset_page();
    } else if (viewport_width >= desktop_breakpoint && scrolling < touch_bottom) {
      body.addClass('scale-content');
      reset_page();
    } else {
      body.addClass('scale-content');
      push_page();
      $("html, body").scrollTop(doc.height());
    }
  });

  function push_page(){
    page.css('transform', 'translateY('+ (150 - $(window).height() + 'px') +')');
    body.addClass('is-scaled');
  }
  function reset_page(){
    page.css('transform', 'translateY(0)');
    body.removeClass('is-scaled');
  }

}

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
