// "use strict";

var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

var h2 = document.createElement('h2');
h2.innerHTML = 'Test Quiz';
wrapper.appendChild(h2);

var wrapper1 = document.createElement('div');
wrapper1.classList.add('wrapper1');
wrapper.appendChild(wrapper1);

function addQuestion(classes, question, parent) {
  var element = document.createElement('h3');
  element.classList.add(classes);
  element.innerHTML = question;
  parent.appendChild(element);
}

var form = document.createElement('form');
wrapper1.appendChild(form);

function addLabel(classes, parent) {
  var element = document.createElement('label');
  element.classList.add(classes);
  parent.appendChild(element);
  return element;
}


function addVariant(variant, parent) {
  var element = document.createElement('span');
  element.innerHTML = variant;
  parent.appendChild(element);
}

function addAnswer(classes, text, name, parent) {
  var element = document.createElement('input');
  element.classList.add(classes);
  element.setAttribute('type', 'radio');
  element.setAttribute('value', 'text');
  element.setAttribute('name', name);
  element.setAttribute('id', 'input_id');
  parent.insertBefore(element, parent.children[1]);
}
//q1
addQuestion('question', '1. Which country is the largest producer of olive oil?', form);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer12', 'q1', label);
addVariant('Spain', label);


var label = addLabel('answer', form);
addAnswer('input-class', 'answer12', 'q1', label);
addVariant('Greece', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer13', 'q1', label);
addVariant('Italy', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer14', 'q1', label);
addVariant('Turkey', label);


//q2
addQuestion('question', '2. Where was built the first subway?', form);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer21', 'q2', label);
addVariant('New York', label);


var label = addLabel('answer', form);
addAnswer('input-class', 'answer22', 'q2', label);
addVariant('London', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer23', 'q2', label);
addVariant('Paris', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer24', 'q2', label);
addVariant('Moscow', label);


//q3
addQuestion('question', '3. What was the currency of Germany before the introduction of the EURO?', form);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer31', 'q3', label);
addVariant('Drahma', label);


var label = addLabel('answer', form);
addAnswer('input-class', 'answer32', 'q3', label);
addVariant('Mark', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer33', 'q3', label);
addVariant('Pound', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer34', 'q3', label);
addVariant('Rouble', label);

//q4
addQuestion('question', '4. From which country does pitta bread originate?', form);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer41', 'q4', label);
addVariant('Greece', label);


var label = addLabel('answer', form);
addAnswer('input-class', 'answer42', 'q4', label);
addVariant('Italy', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer43', 'q4', label);
addVariant('Mexico', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer44', 'q4', label);
addVariant('France', label);

//q5
addQuestion('question', '5. What is bottled a lot in the French town Vichy?', form);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer51', 'q5', label);
addVariant('Jin', label);


var label = addLabel('answer', form);
addAnswer('input-class', 'answer52', 'q5', label);
addVariant('Water', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer53', 'q5', label);
addVariant('Perfumes', label);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer54', 'q5', label);
addVariant('Wine', label);


//BUTTON

var button = document.createElement('button');
button.classList.add('button');
button.innerHTML = 'Check my results';
wrapper1.appendChild(button);
