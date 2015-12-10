var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if(Modernizr.csstransitions && !is_mobile ) {

  var doc = $(document);
  var body = $('body');
  var page = $('.page');
  var desktop_breakpoint = 960;
  body.addClass('scale-content');

  function push_page(){
    push = 'translate(0,'+ (150 - $(window).height() + 'px') +')';
    page.css({
      "-webkit-transform": push,
      "transform": push
    });
    body.addClass('is-scaled');
  }
  function reset_page(){
    page.css({
      "-webkit-transform": 'none',
      "transform": 'none'
    });
    body.removeClass('is-scaled');
  }

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

}

// open menu
$('.menu-btn, .off-canvas-mask, .close-btn, .menu-list-item-title, .menu-sub-list-item > a').on('click', function () {
  $('body').toggleClass('is-open-menu');
  $('.menu-btn').toggleClass('is-open-menu');
});

// smooth scroll
$('.smooth-scroll-link').smoothScroll();


// 程式展示區塊自動上色
hljs.initHighlightingOnLoad();

// 桌面版 menu sticky
if (!Modernizr.touchevents && !is_mobile) {
  $('.header-inner').hcSticky({
      top: 24,
      bottomEnd: 100,
      wrapperClassName: 'sidebar-sticky',
      responsive: true,
      offResolutions: -960,
      stickTo: '.container',
  });
}

// 移動裝置呈現
// if (Modernizr.touchevents && is_mobile) {
  // $('.header').addClass('is-mobile');

  // var ScrollFix = function(elem) {
  //   // Variables to track inputs
  //   var startY, startTopScroll;

  //   elem = elem || document.querySelector(elem);

  //   // If there is no element, then do nothing
  //   if(!elem)
  //     return;

  //   // Handle the start of interactions
  //   elem.addEventListener('touchstart', function(event){
  //     startY = event.touches[0].pageY;
  //     startTopScroll = elem.scrollTop;

  //     if(startTopScroll <= 0)
  //       elem.scrollTop = 1;

  //     if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
  //       elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
  //   }, false);
  // };

  // var scrollable = document.getElementById("scrollable");
  // new ScrollFix(scrollable);
// }
