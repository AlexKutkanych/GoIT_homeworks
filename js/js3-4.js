var myObj = {
  createMyElement: function() {
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.style.height = '1000px';
wrapper.style.width = '1000px';
wrapper.style.margin = '0px auto';
wrapper.style.backgroundColor = 'lightgrey';
var body = document.querySelector('body');
body.appendChild(wrapper);

var h2 = document.createElement('h2');
h2.innerHTML = 'Тест по программированию';
h2.style.display = 'block';
h2.style.margin = 'auto';
h2.style.paddingTop = '30px';
h2.style.marginBottom = '45px';
h2.style.fontFamily = 'Arial, sans-serif';
h2.style.textAlign = 'center';
wrapper.appendChild(h2);

var wrapper1 = document.createElement('div');
wrapper1.classList.add('wrapper1');
wrapper1.style.width = '800px';
wrapper1.style.height = '100%';
wrapper1.style.margin = '0 auto';
wrapper.appendChild(wrapper1);

//question 1
var q1 = document.createElement('h3');
q1. classList.add('question');
q1.innerHTML = '1. Вопрос №1';
wrapper1.appendChild(q1);

var input11 = document.createElement('input');
input11.classList.add('input-class');
input11.setAttribute('type', 'checkbox');
input11.setAttribute('value', 'answer1');

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input11);

var data11 = document.createElement('span');
data11.innerHTML = 'Вариант ответа №1';
label.appendChild(data11);

//checkbox 2
var input12 = document.createElement('input');
input12.classList.add('input-class');
input12.setAttribute('type', 'checkbox');
input12.setAttribute('value', 'answer');
wrapper1.appendChild(input12);

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input12);

var data12 = document.createElement('span');
data12.innerHTML = 'Вариант ответа №2';
label.appendChild(data12);

//checkbox 3
var input13 = document.createElement('input');
input13.classList.add('input-class');
input13.classList.add('input-third');
input13.setAttribute('type', 'checkbox');
input13.setAttribute('value', 'answer');
wrapper1.appendChild(input13);

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input13);

var data13 = document.createElement('span');
data13.innerHTML = 'Вариант ответа №3';
label.appendChild(data13);


//clodeNode - copy elements
// var q2 = q1.cloneNode(true);
// q2.innerHTML = '2. Вопрос №2.';
// q1.parentNode.appendChild(q2);

//question 2
var q2 = document.createElement('h3');
q2. classList.add('question');
q2.innerHTML = '2. Вопрос №2';
wrapper1.appendChild(q2);

var input21 = document.createElement('input');
input21.classList.add('input-class');
input21.setAttribute('type', 'checkbox');
input21.setAttribute('value', 'answer21');

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input21);

var data21 = document.createElement('span');
data21.innerHTML = 'Вариант ответа №1';
label.appendChild(data21);

//checkbox 2
var input22 = document.createElement('input');
input22.classList.add('input-class');
input22.setAttribute('type', 'checkbox');
input22.setAttribute('value', 'answer');
wrapper1.appendChild(input22);

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input22);

var data22 = document.createElement('span');
data22.innerHTML = 'Вариант ответа №2';
label.appendChild(data22);

//checkbox 3
var input23 = document.createElement('input');
input23.classList.add('input-class');
input23.classList.add('input-third');
input23.setAttribute('type', 'checkbox');
input23.setAttribute('value', 'answer');
wrapper1.appendChild(input23);

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input23);

var data23 = document.createElement('span');
data23.innerHTML = 'Вариант ответа №3';
label.appendChild(data23);


// question 3
var q3 = document.createElement('h3');
q3.innerHTML = '3. Вопрос №3';
q3.classList.add('question');
wrapper1.appendChild(q3);

//answer 1
var input31 = document.createElement('input');
input31.classList.add('input-class');
input31.setAttribute('type', 'checkbox');
input31.setAttribute('value', 'answer31');
wrapper1.appendChild(input31);

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input31);


var data31 = document.createElement('span');
data31.innerHTML = 'Вариант ответа №1';
label.appendChild(data31);

//answer 2
var input32 = document.createElement('input');
input32.classList.add('input-class');
input32.setAttribute('type', 'checkbox');
input32.setAttribute('value', 'answer32');
wrapper1.appendChild(input32);

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input32);

var data32 = document.createElement('span');
data32.innerHTML = 'Вариант ответа №2';
label.appendChild(data32);

//answer 3
var input33 = document.createElement('input');
input33.classList.add('input-class');
input23.classList.add('input-third');
input33.setAttribute('type', 'checkbox');
input33.setAttribute('value', 'answer32');
wrapper1.appendChild(input33);

var label = document.createElement('label');
label.classList.add('answer');
wrapper1.appendChild(label);
label.appendChild(input33);

var data33 = document.createElement('span');
data33.innerHTML = 'Вариант ответа №3';
label.appendChild(data33);

//BUTTON

var button = document.createElement('button');
button.classList.add('button');
button.innerHTML = 'Проверить мои результаты';
wrapper1.appendChild(button);
  }
};

myObj.createMyElement();
