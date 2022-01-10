"use strict";

/********************************* function ***********************************/
// showMessage();

// function showMessage() {
//     alert( 'Hello World' );
// }

// showMessage();


// Локальная переменная

// function newMessage() {
//     var mess = "Hello World !!!";
//  //   alert(mess);
// }
// newMessage();
// alert();


// Блоки if/else, switch, for, while, do..while не влияют на область видимости переменных.
// В данном примере i и j будут видны за пределами цикла

// function count() {
//     for (var i = 0; i < 3; i++) {
//         var j = i * 2;
//     }
//     alert(i);
//     alert(j);
// }
// count();

// Функция может обратиться ко внешней переменной, например

// var userAge = 25;

// function userInfo() {
//     var message = 'Вам ' + userAge + ' лет';
//     alert(message);
// }
// userInfo();

// Можно так же изменить значение внешней переменной

// var userName = "Jon";
// alert(userName);
// function renameUser() {
//     userName = "Michael";
//     alert("Your name is " + userName);
// }
// renameUser();
// alert(userName);


// Параметры

// function letterCount(name, word) {
//     var letCount = word.length;
//     document.write("Dear <b>" + name + "</b> in the word " + word + " - <b>" + letCount + "</b> symbols. <br>");
// }
// letterCount("Vardan", "Javascript");
// letterCount("Artur", "Javascript");


// function letterCount(name, word) {
//     var letCount = word.length;
//     document.write("Уважаемый <b>" + name + "</b> в слове " + word + " - <b>" + letCount + "</b> символов.");
// }
// var userName = prompt('Name', '');
// var userWord = "Bootstrap";
// letterCount(userName, userWord);

// Аргументы по умолчанию, если аргумент не передан то он будет (undefined)

// function letterCount(name, word) {
//     if (word !== undefined) {
//         var letCount = word.length;
//     } else {
//         word = "не найдено";
//         letCount = 0;
//     }
//     document.write("Уважаемый <b>" + name + "</b> в слове " + word + " - <b>" + letCount + "</b> символов.<br>");
// }
// letterCount("Vardan");

// Возврат значения.

// function calc(num1,num2, nsh) {
//     switch (nsh) {
//         case '+':
//             return (num1 + ' + ' + num2 + ' = ' + (num1 + num2));
//         case '-':
//             return (num1 + ' - ' + num2 + ' = ' + (num1 - num2));
//         case '*':
//             return (num1 + ' * ' + num2 + ' = ' + (num1 * num2));
//         case '/':
//             return (num1 + ' / ' + num2 + ' = ' + (num1 / num2));
//     }
// }

// var num1 = +prompt('n1', '');
// var num2 = +prompt('n2', '');
// var nshan = prompt('nshan', '');

// document.write(calc(num1, num2, nshan));
// alert(calc(num1, num2, nshan));
// var havas = calc(num1, num2, nshan);
// alert(havas);


