$(function(){
  var $button = $('.button');
  $button.on('click', function(){
  var $correct = $('#Spain');
  if($correct === true) {
    alert('correct');
  } else{
    alert('wrong');
  }
});
});
