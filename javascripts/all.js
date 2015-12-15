var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// if(Modernizr.csstransitions && !is_mobile ) {

//   var doc = $(document);
//   var body = $('body');
//   var page = $('.page');
//   var desktop_breakpoint = 960;
//   body.addClass('scale-content');

//   function push_page(){
//     push = 'translate(0,'+ (150 - $(window).height() + 'px') +')';
//     page.css({
//       "-webkit-transform": push,
//       "transform": push
//     });
//     body.addClass('is-scaled');
//   }
//   function reset_page(){
//     page.css({
//       "-webkit-transform": 'none',
//       "transform": 'none'
//     });
//     body.removeClass('is-scaled');
//   }

//   $(window).on('scroll', function(){
//     var scrolling = doc.scrollTop();
//     var touch_bottom = body.height() - $(window).height() - $('.site-info').outerHeight();
//     if ( scrolling >= touch_bottom ) {
//       var viewport_width = $(window).width();
//       if (viewport_width >= desktop_breakpoint) {
//         push_page();
//       }
//     } else {
//       reset_page();
//     }
//   });

//   $(window).resize(function() {
//     var scrolling = doc.scrollTop();
//     var touch_bottom = body.height() - $(window).height() - $('.site-info').outerHeight();
//     var viewport_width = $(window).width();
//     if (viewport_width < desktop_breakpoint ) {
//       body.removeClass('scale-content');
//       reset_page();
//     } else if (viewport_width >= desktop_breakpoint && scrolling < touch_bottom) {
//       body.addClass('scale-content');
//       reset_page();
//     } else {
//       body.addClass('scale-content');
//       push_page();
//       $("html, body").scrollTop(doc.height());
//     }
//   });

// }

// open menu
$('.menu-btn, .off-canvas-mask, .close-btn, .menu-list-item-title, .menu-sub-list-item > a').on('click', function () {
  $('body').toggleClass('is-open-menu');
  $('.menu-btn').toggleClass('is-open-menu');
});

// smooth scroll
$('.smooth-scroll-link').smoothScroll();


// 程式展示區塊自動上色
hljs.initHighlightingOnLoad();

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

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  var touch_bottom = $(document).height() - $(window).height() - 120;

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('.header, .back-to-top').removeClass('is-active').addClass('is-hide');
    $('body').removeClass('is-open-menu');

    // 當頁面接近底部的動作
    if ( st > touch_bottom ) {
      $('.header, .back-to-top').removeClass('is-hide').addClass('is-active');
      $('body').removeClass('is-open-menu');
    }
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('.header, .back-to-top').removeClass('is-hide').addClass('is-active');
      $('body').removeClass('is-open-menu');
    }
  }
  // 當捲動還沒超出 menu 高度的時候
  if (st < navbarHeight) {
    $('.back-to-top').removeClass('is-active');
  }
  // 當滾到底部

  lastScrollTop = st;
}

// 桌面版 menu sticky
if (!Modernizr.touchevents && !is_mobile) {
  $('.header-inner').hcSticky({
      top: 24,
      bottomEnd: 100,
      noContainer: true,
      responsive: true,
      offResolutions: -960,
      stickTo: '.page',
  });
}

// mobile版 menu sticky
// if (Modernizr.touchevents && is_mobile) {
  // var menu_offset_top = navbarHeight - $(window).height();
  // var touch_bottom = $(document).height() - $(window).height() - 120;
  // $('.header').css({
  //   'height': navbarHeight
  // })
  // $(window).on('scroll', function(){
  //   var st = $(this).scrollTop();

  //   if ( menu_offset_top < 0 ) {
  //     $('.header-inner').css({
  //       'position': 'fixed',
  //       'top': 36
  //     })
  //   } else if ( st >= menu_offset_top + 36 ) {
  //     $('.header-inner').css({
  //       'position': 'fixed',
  //       'top': -menu_offset_top
  //     })
  //     if (st >= touch_bottom ){
  //       $('.header-inner').css({
  //         'position': 'absolute',
  //         'top': touch_bottom - menu_offset_top
  //       })
  //     }
  //   } else if (st < menu_offset_top + 36) {
  //     $('.header-inner').css({
  //       'position': 'static',
  //     })
  //   }

  // })
  // $('.header-inner').hcSticky({
  //   innerSticker: '.menu',
  //   bottomEnd: 100,
  //   wrapperClassName: 'sidebar-sticky',
  //   responsive: true,
  //   offResolutions: -960,
  //   stickTo: '.page',
  //   followScroll: false,
  // });

  // $('.header').addClass('is-mobile');
  // $(window).on('scroll', function(){
  //   var st = $(this).scrollTop();
  //   if (st >= menu_offset_top) {
  //     st = menu_offset_top;
  //   }
  //   $('.header-inner').css({
  //     "-webkit-transform": 'translate(0,'+ (-st + 'px') +')',
  //     "transform": 'translate(0,'+ (-st + 'px') +')'
  //   });
  // });

  // page.css({
  //   "-webkit-transform": 'translate(0,'+ (st + 'px') +')',
  //   "transform": 'translate(0,'+ (st + 'px') +')'
  // });
// }
