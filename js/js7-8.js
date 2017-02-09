$('body').append('<div></div>');
var $wrapper = $('div');
$wrapper.addClass('wrapper');

var $newDiv = $('<div></div>');
$newDiv.addClass('form');
$wrapper.append($newDiv);

var $form = $('<form></form>');
$newDiv.append($form);

var $label1 = $('<label><span>Firstname</span><input type="text"></input></label>');
$form.append($label1);

var $label2 = $('<label><span>Lastname</span><input type="text"></input></label>');
$form.append($label2);


var $label3 = $('<label><span>Address</span><input type="text"></input></label>');
$form.append($label3);

var $span = $('span').last();
$span.addClass('last');
// var $label2 = $(<label><span>Lastname</span><input type="text"></label>);
// console.log($wrapper);

//help1

var $help1 = $('<p>Please provide your firstname.</p>');
$label1.append($help1);
$help1.addClass('hide');

var $input1 = $label1.find('input');
$input1.mouseover(function(){
  $label1.find($help1).fadeIn(500).css('display', 'inline');
})
  .mouseleave(function(){
    $label1.find($help1).css('display', 'none');
});

$label1.on('click', function(){
  $help1.delay(500).fadeIn(1000).fadeOut(5000);
  // $help1.fadeIn(500).fadeOut(500);
});

var $attr1 = $input1.attr('tabIndex', '1');
$attr1.focus(function(){                            //involve tab key
    $help1.delay(500).fadeIn(1000).fadeOut(5000);
});

//help2

var $help2 = $('<p>Please provide your lastname.</p>');
$label2.append($help2);
$help2.addClass('hide hide2');

var $input2 = $label2.find('input');

$input2.mouseover(function(){
  $label2.find($help2).fadeIn(500).css('display', 'inline');

})
  .mouseleave(function(){
    $label2.find($help2).css('display', 'none');
});

$label2.on('click', function(){
  $help2.delay(500).fadeIn(1000).fadeOut(5000);
});

var $attr2 = $input2.attr('tabIndex', '2');
$attr2.focus(function(){                            //involve tab key
    $help2.delay(500).fadeIn(1000).fadeOut(5000);
});

//help3

var $help3 = $('<p>Your home and work address.</p>');
$label3.append($help3);
$help3.addClass('hide hide3');

var $input3 = $label3.find('input');

$input3.mouseover(function(){
  $label3.find($help3).fadeIn(500).css('display', 'inline');
})
  .mouseleave(function(){
    $label3.find($help3).css('display', 'none');
});

$label3.on('click', function(){
  $help3.show();
  // $help3.delay(500).fadeIn(1000).fadeOut(5000);
});

var $attr3 = $input3.attr('tabIndex', '3');
$attr3.focus(function(){                            //involve tab key
    $help3.fadeIn(1000).fadeOut(5000);
});

var $button = $('<button>Show help!</button>');
$newDiv.append($button);
$button.attr('type', 'button');

$button.on('click', function(){
  $help1.toggle();
  $help2.toggle();
  $help3.toggle();
});
