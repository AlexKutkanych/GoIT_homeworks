// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   percentPosition: true
// });

// var $grid = $('.grid').masonry({
//   // options...
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });

$(document).ready(function(){
  // $('.grid').isotope({
  //   itemSelector: '.grid-item',
  //   masonry: {
  //     columnWidth: 100
  //   }
  // });
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      // columnWidth: '.grid-sizer'
    });
  });
});
