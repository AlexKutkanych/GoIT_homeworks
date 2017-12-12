$(function(){
  var myPage = $('#mypage').html();

  var info = {
      fullname: 'Kutkanych Oleksandr',
      image: 'img/img.png',
      whyfrontend: ['I want to SEE results of my programming work', 'use my English more and get knew knowledge', 'earn more money'],
      phone: '+380952411960',
      profile: 'https://www.linkedin.com/in/oleksandr-kutkanych-4b5b9452/',
      feedback: 'some feedback'
    };

  var content = tmpl(myPage, {data: info});

  $('body').append(content);

});
