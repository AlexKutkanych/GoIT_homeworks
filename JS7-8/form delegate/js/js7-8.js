$('body').append('<div></div>');
var $wrapper = $('div');
$wrapper.addClass('wrapper');

var $newDiv = $('<div></div>');
$newDiv.addClass('form');
$wrapper.append($newDiv);

var $form = $('<form></form>');
$newDiv.append($form);

var $label1 = $('<label class="label1"><span>Firstname</span><input type="text"></input></label>');
$form.append($label1);

var $label2 = $('<label class="label2"><span>Lastname</span><input type="text"></input></label>');
$form.append($label2);

var $label3 = $('<label class="label3"><span>Address</span><input type="text"></input></label>');
$form.append($label3);

var $span = $('span').last();
$span.addClass('last');


//help1
var $help1 = $("<p class='hide'>Please provide your firstname.</p>");
$('.label1').append($help1);

$('body').delegate('.label1', 'mouseover focus', function(){
  $help1.fadeIn('slow').fadeOut(1500);
});

//help2
var $help2 = $("<p class='hide hide2'>Please provide your lastname.</p>");
$('.label2').append($help2);

$('body').delegate('.label2', 'mouseover focus', function(){
  $help2.fadeIn('slow').fadeOut(1500);
});


//help3
var $help3 = $("<p class='hide hide3'>Your home and work address.</p>");
$('.label3').append($help3);

$('body').delegate('.label3', 'mouseover focus', function(){
  $help3.fadeIn('slow').fadeOut(1500);
});
