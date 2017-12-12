// "use strict";

var questions = [
  // {
  //   question: 'Which country is the largest producer of olive oil?',
  //   answer: ['Spain', 'Greece', 'Italy', 'Turkey'],
  //   name: 'q1',
  //   correctAnswer: 0
  // },
  // {
  //   question: 'Where was built the first subway?',
  //   answer: ['New York', 'London', 'Paris', 'Moscow'],
  //   name: 'q2',
  //   correctAnswer: 0
  // },
  // {
  //   question: 'What was the currency of Germany before the introduction of the EURO?',
  //   answer: ['Drahma', 'Mark', 'Pound', 'Rouble'],
  //   name: 'q3',
  //   correctAnswer: 1
  // },
  // {
  //   question: 'From which country does pitta bread originate?',
  //   answer: ['Greece', 'Italy', 'Mexico', 'France'],
  //   name: 'q4',
  //   correctAnswer: 0
  // },
  // {
  //   question: 'What is bottled a lot in the French town Vichy?',
  //   answer: ['Jin', 'Water', 'Perfumes', 'Wine'],
  //   name: 'q4',
  //   correctAnswer: 1
  // }

  {
    question: 'Which country is the largest producer of olive oil?',
    answer1: 'Spain',
    answer2: 'Greece',
    answer3: 'Italy',
    answer4: 'Turkey'
  },
  {
    question: 'Where was built the first subway?',
    answer1: 'New York',
    answer2: 'London',
    answer3: 'Paris',
    answer4: 'Moscow'
  },
  {
    question: 'What was the currency of Germany before the introduction of the EURO?',
    answer1: 'Drahma',
    answer2: 'Mark',
    answer3: 'Pound',
    answer4: 'Rouble'
  },
  {
    question: 'From which country does pitta bread originate?',
    answer1: 'Greece',
    answer2: 'Italy',
    answer3: 'Mexico',
    answer4: 'France'
  },
  {
    question: 'What is bottled a lot in the French town Vichy?',
    answer1: 'Jin',
    answer2: 'Water',
    answer3: 'Perfumes',
    answer4: 'Wine'
  }
];

// console.log(JSON.stringify(questions));
//write our questions to localStorage
localStorage.setItem('quiz', JSON.stringify(questions));

//get our questions from localStorage
var myQuiz = localStorage.getItem('quiz');
console.log(myQuiz);
