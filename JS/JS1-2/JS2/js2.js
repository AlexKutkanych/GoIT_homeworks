//second task
/*var arrNames = [];
for (i = 0; i < 5; i++) {
  arrNames.push(prompt ('Enter 5 random names'));
}
console.log(arrNames);

var userName = prompt('Enter your username', 'Your username');
for (i = 0; i < 1; i++) {
  if ( userName === arrNames[i]) {
    alert(userName + ', ' + 'welcome!');
  } else {
    alert('Such username does not exist');
  }
  // (arrNames === userName ) ? alert(userName + ', ' + 'welcome!') : alert('Such username does not exist');
} */

//MORE OPTIMAL VERSION

var arrNames = [];
for (i = 0; i < 5; i++){
  arrNames.push(prompt('Enter 5 random names'));
}
console.log(arrNames);

var userName = prompt('Enter your username', 'Your username');
var txt = 'Such username does not exist';
for (i = 0; i < 1; i++) {
  if (userName == arrNames[i]) {
    txt = (userName + ', welcome');
    break;
  }
}

alert(txt);
