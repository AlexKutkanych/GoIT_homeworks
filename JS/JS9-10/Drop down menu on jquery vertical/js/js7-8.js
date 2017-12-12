$(function(){
  var $links = $('.menu a');
  console.log($links);

  $links.on('click', function(){
    var $submenu = $(this).siblings('.submenu');
    $submenu.toggle();
  });



});
