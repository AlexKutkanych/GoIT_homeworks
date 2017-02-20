// $(function(){
//   var html = $('#test').html();
//   var data = {
//     title: 'Hello'
//   };
//   var content = tmpl(html, data);
//   $('body').append(content);
// });

$(function(){
  var html = $('#test').html();
  var articles = [
  {
    title: 'Article1',
    content: 'Lorem ipsum aoefgpowsj]jaepiogjropejagpojpojpoaejgrjaoejrg-]jweJEAPJH]AE[HJE]'
  },
    {
    title: 'Article2',
    content: 'Lorem ipsum aoefgpowsj]jaepiogjropejagpojpojpoaejgrjaoejrg-]jweJEAPJH]AE[HJE]'
  },
  {
    title: 'Article3',
    content: 'Lorem ipsum aoefgpowsj]jaepiogjropejagpojpojpoaejgrjaoejrg-]jweJEAPJH]AE[HJE]'
  }

  ];
  var content = tmpl(html, {
    data: articles });
  $('body').append(content);
});
