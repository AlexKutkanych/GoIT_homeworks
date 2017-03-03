$(function(){
  var $newDiv = $('.sliding-block');
  console.log($newDiv);
  var $pic = $('.serv-pic1');
  $pic.on('click', function(){
    // $newDiv.css('display', 'block');
    alert('block');
  });

  var $active = $('.menu-item');
  // console.log($active);
  $active.on('click', function(){
    $active.addClass('active').siblings().removeClass('active');
  });

});
