$(function(){
  $('body').append('<div></div>');
  var $wrapper = $('body').find('div');
  $wrapper.addClass('wrapper');

  $wrapper.append('<h1>Dropdown menu</h1>');
  var $ul = $('<ul></ul>');
  $wrapper.append($ul);
  $ul.addClass('menu');

  $ul.append('<li></li>');
  $ul.append('<li></li>');
  $ul.append('<li></li>');
  $ul.append('<li></li>');
  $('li').addClass();
  $('li').append('<a>Nav</a>');
  var $listItem = $ul.find('li');
  $listItem.addClass('list-item');

  $listItem.append('<ul></ul>');
  var $submenu = $listItem.find('ul');
  $submenu.addClass('submenu');
  $submenu.append('<li><a class="submenu-link">Submenu 1</a></li>');
  $submenu.append('<li><a class="submenu-link">Submenu 2</a></li>');
  $submenu.append('<li><a class="submenu-link">Submenu 3</a></li>');
  $submenu.append('<li><a  class="submenu-link">Submenu 4</a></li>');
  $submenu.css('display', 'none');
  $submenu.find('a').addClass('sub1');
  $('a').attr('href', '#');

  var $submenu1 = $('<ul><li><a>submenu1</a></li><li><a>submenu2</a></li></ul>');
  $('.submenu li').append($submenu1);
  $('.submenu li ul').addClass('submenu1');
  $('.submenu li ul li').addClass('list-item');



  $('.list-item').hover(
       function() {
           $(this).children('.submenu').slideDown("slow");
       },
       function() {
           $(this).children('.submenu').slideUp("slow");
       }
   );

  $('.submenu-link').mouseover(function(){
    $(this).stop().animate({
      'margin-left': '30px',
      'background-color': '#87CEEB',
    }, 500);
  });
  $('.submenu-link').mouseout(function(){
    $(this).stop().animate({
      'margin-left': '0px',
      'background-color': 'rgb(0, 155, 255)',

    });
  });

//submenu1 dropdown
  var $links = $('.submenu a');
  $links.on('click', function(){
      var $sub1 = $(this).siblings('.submenu1');
      $sub1.slideToggle();
      var $sublink = $('.submenu1 a');
      $sublink.hover(function(){
        $(this).stop(true).animate({
        'background-color': '#87CEEB',
        'text-indent': '30px'
      }, 1000);
    });
  });
});
