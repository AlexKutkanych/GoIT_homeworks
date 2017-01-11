//second task
var arrNames = [];
for (i = 0; i < 5; i++) {
  arrNames.push(prompt ('Enter 5 random names'));
}
console.log(arrNames);

var userName = prompt('Enter your username', 'Your username');
var a = userName.length;
for (i = 0; i < a; i++) {
  if ( userName === arrNames[i]) {
    alert(userName + ' ' + 'welcome!');
  } else {
    alert('Such username does not exist');
  }
}

// (arrNames === userName ) ? alert(userName + ' ' + 'welcome!') : alert('Mistake');
