"use strict";
var [myTest, answers] = [
  [
  {
    question: '1. Which country is the largest producer of olive oil?',
    answer1: 'Spain',
    answer2: 'Greece',
    answer3: 'Italy',
    answer4: 'Turkey',
    name: 'question1'
  },
  {
    question: '2. Where was built the first subway?',
    answer1: 'New York',
    answer2: 'London',
    answer3: 'Paris',
    answer4: 'Moscow',
    name: 'question2'
  },
  {
    question: '3. What was the currency of Germany before the introduction of the EURO?',
    answer1: 'Drahma',
    answer2: 'Mark',
    answer3: 'Pound',
    answer4: 'Rouble',
    name: 'question3'
  },
  {
    question: '4. From which country does pitta bread originate?',
    answer1: 'Greece',
    answer2: 'Italy',
    answer3: 'Mexico',
    answer4: 'France',
    name: 'question4'
  },
  {
    question: '5. What is bottled a lot in the French town Vichy?',
    answer1: 'Jin',
    answer2: 'Water',
    answer3: 'Perfumes',
    answer4: 'Wine',
    name: 'question5'
  }
],
[true, false, false, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, false]
];


//записую данні в localStorage, перетворюючи обєкт в JSON
localStorage.setItem('myTest', JSON.stringify(myTest));
// Беру дані з localStorage і розпарсюю їх
myTest = JSON.parse(localStorage.getItem('myTest'));

//описую шаблон, який ставить HTML фрагмент на сторінку з використанням зворотньої кавички
var PAGE = obj => `
<p class="title">Test</p>
<form id="form">
${obj.map(obj => `
  <div class='form__block'>
  <p class="question">${obj.question}</p>
  <label class="answer"><input id="input-class" type='radio' name="${obj.name}"><i>${obj.answer1}</i></label>
  <label class="answer"><input id="input-class" type='radio' name="${obj.name}"><i>${obj.answer2}</i></label>
  <label class="answer"><input id="input-class" type='radio' name="${obj.name}"><i>${obj.answer3}</i></label>
  <label class="answer"><input id="input-class" type='radio' name="${obj.name}"><i>${obj.answer4}</i></label>
  </div>
  `).join('')}
  <button id="check_button" type='submit'>Check Results</button>
  </form>
  `;
// ставимо шаблон на строніку
var parent = document.getElementsByClassName('wrapper')[0];
 parent.innerHTML = PAGE(myTest);

// ставимо колбек на клік мишкою по кнопці перевірити результат
var btn = document.getElementById('check_button');
btn.addEventListener("click", function(event) {
  showResults();// показуємо результат
  event.preventDefault(); // так як у нас ставиться форма, зробимо щоб сторінка не перегружалася
});

// реалізація модлаьного вікна
var btnTestOk = document.getElementsByClassName('test-modal__click')[0];
console.log(btnTestOk);
var resultsWindow = document.getElementsByClassName('test-modal')[0];
    btnTestOk.addEventListener("click", function() {
    resultsWindow.setAttribute('style', 'display: none;');
});
var testResultMassage = document.getElementsByClassName("test-message")[0];

// функція, яка показує результат
function showResults() {
  var elems = document.getElementsByTagName("input");
  var res = Array.from(elems, x => x.checked);
  var tmp = answers.length;

  var result = compareArr(answers, res, tmp);

     if(result) {
        testResultMassage.innerHTML = 'Well done, you scored 5/5';
    } else {
        testResultMassage.innerHTML = 'You did not pass';
  }

resultsWindow.setAttribute('style', 'display: block;');

}

//функція, яка порівнює два масиви
var compareArr = (arr1, arr2, arrayLength) => {
  for (var i = 0; i < arrayLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
