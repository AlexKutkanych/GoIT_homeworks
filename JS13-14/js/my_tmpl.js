// "use strict";

$(function(){
  var quiz = $('#quiz').html();
  // console.log(quiz);
  var questions = [
    {
      question: 'Which country is the largest producer of olive oil?',
      answer1: 'Spain',
      answer2: 'Greece',
      answer3: 'Italy',
      answer4: 'Turkey',
      name: 'q1',
      id1: 'Spain',
      id2: 'Greece',
      id3: 'Italy',
      id4: 'Turkey'
    },
    {
      question: 'Where was built the first subway?',
      answer1: 'New York',
      answer2: 'London',
      answer3: 'Paris',
      answer4: 'Moscow',
      name: 'q2'
    },
    {
      question: 'What was the currency of Germany before the introduction of the EURO?',
      answer1: 'Drahma',
      answer2: 'Mark',
      answer3: 'Pound',
      answer4: 'Rouble',
      name: 'q3'
    },
    {
      question: 'From which country does pitta bread originate?',
      answer1: 'Greece',
      answer2: 'Italy',
      answer3: 'Mexico',
      answer4: 'France',
      name: 'q4'
    },
    {
      question: 'What is bottled a lot in the French town Vichy?',
      answer1: 'Jin',
      answer2: 'Water',
      answer3: 'Perfumes',
      answer4: 'Wine',
      name: 'q5'
    }
  ];
  //   {
  //     question: 'Which country is the largest producer of olive oil?',
  //     answer: ['Spain', 'Greece', 'Italy', 'Turkey'],
  //     name: 'q1',
  //     correctAnswer: 0
  //   },
  //   {
  //     question: 'Where was built the first subway?',
  //     answer: ['New York', 'London', 'Paris', 'Moscow'],
  //     name: 'q2',
  //     correctAnswer: 0
  //   },
  //   {
  //     question: 'What was the currency of Germany before the introduction of the EURO?',
  //     answer: ['Drahma', 'Mark', 'Pound', 'Rouble'],
  //     name: 'q3',
  //     correctAnswer: 1
  //   },
  //   {
  //     question: 'From which country does pitta bread originate?',
  //     answer: ['Greece', 'Italy', 'Mexico', 'France'],
  //     name: 'q4',
  //     correctAnswer: 0
  //   },
  //   {
  //     question: 'What is bottled a lot in the French town Vichy?',
  //     answer: ['Jin', 'Water', 'Perfumes', 'Wine'],
  //     name: 'q4',
  //     correctAnswer: 1
  //   }
  // ];
  // var checked =
  var $content = tmpl(quiz, {data: questions});
  $('body').append($content);

  //
  //   var $button = $('button');
  //   $button.on('click', function(){
  //     function submit(){
  //       var correctAnswer = $('#Spain');
  //       if(correctAnswer.checked === true) {

  var $input = $('input');
  $input.focusin(function(){
    $(this).attr('checked', 'checked');
  });
  $input.focusout(function(){
    $(this).removeAttr('checked', 'checked');
  });

  
  //         alert('correct');
  //       }
  //     }
      // alert('w');
    // });
    // console.log($button);
});
