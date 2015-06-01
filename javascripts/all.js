// var waypoints = $('.site-info').waypoint({
//   handler: function(direction) {
//     $('body').toggleClass('is-scaled');
//   },
//   offset: '100%'
// })

$('.site-list').slick({
  centerMode: true,
  centerPadding: '11.25%',
  slidesToShow: 1,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: 'unslick'
    }
  ]
});
