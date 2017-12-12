// function calculateSquare() {
//   var PI = 3.14;
//   var r = prompt('Enter radius');
//   var length = PI * r*r;
//   console.log(length);
// }
//
// var result = calculateSquare(5);
// console.log(result);

// console.log(jQuery);

// $(document).ready(function(){
//   var element = $('.wrapper');
//   console.log(element);
// });


// method FIND
// $(function(){
//   var $element = $('.wrapper');
//   var $paragraph = $element.find('p')[1];
//
//   console.log($paragraph);
// });

//method PARENT
// $(function(){
//     var $element = $('.wrapper').parent();
//
//   console.log($element);
// });

//method addClass/removeClass
$(function(){
  var $paragraph = $('a');
  $paragraph.addClass('green');

  $paragraph.css({
    color: 'white',
    background: 'black'
  });

  var $link = $('a').last();
  console.log($link);

  //method CSS
    $link.css({
    color: 'white',
    background: 'blue'
  });
  //CHAININGS - цепочки вызовов
  $link
  // .attr('href', 'http://google.com/')
  .attr('target', '_blank');

  //method remove
  $link.remove();

  //method append
  $('.wrapper').append('<div>Some div</div>');
  $('.wrapper').append($link);

  var $newDiv = $('div').last();
  console.log($newDiv);

  //methon on()
  $link.on('click', function(){
    alert('Coding is fun');
  });

  //method one() - can click only once
  $paragraph.one('click', function(){
    alert('I pop only once');
  });

  //method hover(handlerin, handlerout)
  // $newDiv.hover(
  //   function(){
  //     console.log('hovered');
  //   }, function() {
  //     console.log('unhovered');
  //   }
  // );

  //method hide - hide while hovered
      $link.hover(
      function(){
        $(this).hide();
      }, function(){
        // alert('See me');
      }
    );
    // console.log($anotherDiv);
});

//method

function sum(a, b) {
  return a + b;
}
