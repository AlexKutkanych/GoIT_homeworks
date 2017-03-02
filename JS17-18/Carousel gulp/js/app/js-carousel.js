$(function(){
  $.fn.carousel = function(options){


   var defaults = {
     fontSize: '16px',
     color: 'white',
     backgroundColor: 'rgb(0, 155, 255)',
     animateLeft: 500,
     animateRight: 500
   };

   var settings = $.extend(defaults, options);

   var $buttonLeft = $('.carousel-arrow-left');
   var $buttonRight = $('.carousel-arrow-right');
   var $elementsList = $('.carousel-list');

   var $pixelsOffset = 1024;
   var $currentLeftValue = 0;
   var $elementsCount = $elementsList.find('li').length;
   var $minimumOffset = -(($elementsCount - 1) * $pixelsOffset);
   var $maximumOffset = 0;

   //customization
   $buttonLeft.css({
     'font-size': settings.fontSize,
     'background-color': settings.backgroundColor,
     'color': settings.color
   });

   $buttonRight.css({
     'font-size': settings.fontSize,
     'background-color': settings.backgroundColor,
     'color': settings.color
   });

   //onclick events
    $buttonLeft.click(function(){
      if ($currentLeftValue != $maximumOffset) {
          $currentLeftValue += 1024;
          $elementsList.animate({left: $currentLeftValue + "px"}, settings.animateLeft);
      }
   });


    $buttonRight.click(function(){
     if ($currentLeftValue != $minimumOffset) {
         $currentLeftValue -= 1024;
         $elementsList.animate({left: $currentLeftValue + "px"}, settings.animateRight);
       }
     });
 };
})(jQuery);

// $(function(){
//  var $buttonLeft = $('.carousel-arrow-left');
//  var $buttonRight = $('.carousel-arrow-right');
//  var $elementsList = $('.carousel-list');
//
//  var $pixelsOffset = 125;
//  var $currentLeftValue = 0;
//  var $elementsCount = $elementsList.find('li').length;
//  var $minimumOffset = -(($elementsCount - 1) * $pixelsOffset);
//  var $maximumOffset = 0;
//
//   $buttonLeft.click(function(){
//     if ($currentLeftValue != $maximumOffset) {
//         $currentLeftValue += 125;
//         $elementsList.animate({left: $currentLeftValue + "px"}, 500);
//     }
//  });
//
//   $buttonRight.click(function(){
//    if ($currentLeftValue != $minimumOffset) {
//        $currentLeftValue -= 125;
//        $elementsList.animate({left: $currentLeftValue + "px"}, 500);
//  }
//  });
// });
