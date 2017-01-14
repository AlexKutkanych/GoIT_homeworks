// var admin;
// var name = "Vasiliy";
// admin = name;
// alert(admin);

// alert(1 + '2');
// alert('1' + '2');
// alert(1 + 2);

// OPERATORS
// var a = 5;
// var b = a++;
// alert(++b);


/*INTERRACTION WITH USER*/
// var name = prompt('What is your name', "Enter your name");
// alert('Hello,' + ' ' + name + '.');
// var isDasha = confirm("Are you Dasha?");

// var name = prompt('What is your name', "Enter your name");
// alert(name);
// console.log(name); /*is shown in console*/

/*IF*/
// var quiz1 = prompt('When did Ukraine get an Independence?', 'Enter year');
// if (quiz1 != 1991) {
//   // alert('Wrong!');
//   message ='Wrong!';
//   // alert('Our country got Independence in 1991');
// } else {
//   alert('Great work!');
// }

// var nameJS = prompt('What is the official name of JS?', 'Enter your variant');
// if (nameJS == "ECMAScript") {
//   alert('Well done!');
// } else {
//   alert('ECMAScript');
// }

// var number = prompt('Enter your number');
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

/*CHECKING LOGIN AND PASS*/
// var login = prompt('Enter your login', 'Enter your login');
// if (login == 'admin') {
//   var pass = prompt('Enter your pass');
//   if (pass == "Black man") {
//     alert('Welcome');
//   } else if (null) {
//     alert('Enter denied');
//   } else {
//     alert('Wrong pass!');
//   }
// } else if (null) {
//   alert('Canceled');
// } else {
//   alert('I dunno u');
// }

/*CYCLES*/
// for (var i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//   console.log(i);
//   }
// }

// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

// var i = 0;
// while (i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }

// do {
//   var a = prompt ('Enter number bt 100');
// } while(a < 100 && a != null);




// var x = prompt('Enter base');
// var n = prompt('Enter expon');

var arr = [];
var a = 0;
while (a <= 5) {
  prompt('Enter a');
  arr.push(a);
  a++;
}
console.log ('arr ', arr);









// var arr = [3, '45345', 34, 3, undefined, undefined,]
// arr.push('10');
//
// console.log(arr[1]);
// console.log('arr length =', arr.length);
//
//
// arr[10] = "5th element";
// console.log('5th element=', arr);
