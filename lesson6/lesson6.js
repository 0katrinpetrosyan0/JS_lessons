"use strict";

// Функция такое же значение, что строка или число ********************/

// function sayHi() {
//     alert("Hello World !!!");
// }
// alert(sayHi);

/* Можно скопировать функцию *******************************************/

// function message() {
//     alert("Success");
// }
// var newFunc = message;
// newFunc();
// message = null;
// message();
// newFunc();

/* Объявление Function Expression ******************************************/

// alert(calc(5, 5));
// var calc = function (a, b) {
//     return a + b;
// };
// alert(calc(5, 5));

/* Function Declaration ******************************************************/

// alert(calc(5, 5));
// function calc(a, b) {
//     return a + b;
// }

/* Можно создавать функции в зависимости от каких-то условий ******/
// Function Declaration в режиме "use strict" работать не будет

// var answer = +prompt("Сколько Вам лет ?", 15);
// if (answer > 18) {
//     function message() {
//         alert("Добро пожаловать !");
//     }
// } else {
//     function message() {
//         alert("Вход запрещен !");
//     }
// }
// message();

// Function Expression будет работать в любом случае

// var answer = +prompt("Сколько Вам лет ?", 15);
// if (answer > 18) {
//     var  message = function() {
//         alert("Добро пожаловать !");
//     }
// } else {
//     var  message = function() {
//         alert("Вход запрещен !");
//     }
// }
// message();

/* Еще один вид функций, ананимная функция ask(question, yes, no) ******/
/* Объявление ***************************************************************/

// function check(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }


/* Вариант использования 1 ************************************************/

// function showOk() {
//     alert( "Вы согласились." );
// }
// function showCancel() {
//     alert( "Вы отменили выполнение." );
// }

// check("Вы согласны?", showOk, showCancel);

/* Вариант использования 2 ************************************************/

// check(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );


/* Редко используемый вид функций new Function(params, code) **********/

// var myFunc = new Function('a, b', 'return a * b');
// alert(myFunc(5,5));


/* Работа с числами ********************************************************/

// parseInt()
// Унарный + тут не подходит

// alert(+"12px");

// Функция parseInt и ее аналог parseFloat преобразуют строку символ за символом, пока это возможно.
// При возникновении ошибки возвращается число, которое получилось.
// Функция parseInt читает из строки целое число, а parseFloat – дробное.

// var intNum = parseInt('12px');
// document.write(intNum);

// parseFloat()

// var flotNum = parseFloat('12.3.4');
// document.write(flotNum);

// parseInt/parseFloat возвращают NaN при ошибке на первом же символе

// var num = parseInt('a123');
// alert(num);

// Проверка на число isNaN
// Пустая строка и строка из пробельных символов преобразуются к 0, поэтому считаются числами.

// var answer = prompt("Введите значение", "");
// if (isNaN(answer)) {
//     alert("Not a number");
// } else {
//     alert("Number");
// }

/**
 * Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не Infinity/-Infinity/NaN.
 Правая часть отсеет заведомо не-числа, но оставит такие значения как true/false/null и пустую строку '',
 так как они корректно преобразуются в числа.
 Для их проверки нужна левая часть. Вызов parseFloat(true/false/null/'') вернёт NaN для этих значений.
 Так устроена функция parseFloat: она преобразует аргумент к строке, то есть true/false/null становятся "true"/"false"/"null",
 а затем считывает из неё число, при этом пустая строка даёт NaN.
 В результате отсеивается всё, кроме строк-чисел и обычных чисел.
 */

// var answer = prompt("Введите значение", "11, abc");
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
// alert(isNumeric(answer));



/* Округление ***************************************************************/
// Округляет вниз

// var fl = Math.floor(3.5);
// document.write(fl);

// Округляет вверх

// var cl = Math.ceil(3.5);
// document.write(cl);

// Округляет до ближайшего целого

// var rn = Math.round(3.5);
// document.write(rn);

// Округление до заданной точности

// num.toFixed(); возвращает результат в виде строки

// var a = 12.4345654;
// var num1 = a.toFixed(5);
// document.write(num1);

// var b = 12.36;
// var num2 = b.toFixed(1);
// document.write("12,36.toFixed(1): " + num2 + "<br>");



// При необходимости можно дополнить нулями до нужной точности:
// var c = 12.34;
// var num3 = c.toFixed(5);
// document.write("12,34.toFixed(5): " + num3 + "<br>");





/* Строки *******************************************************************/
// Получает доступ к символу

// var number = 100;
// document.write(typeof number.toLocaleString());

// var str = "JavaScript";
// var str1 = str.charAt(0);
// var str2 = str.charAt(4);
// document.write(str1 + str2);

// Регистр
// var str1 = "javascript";
// var str2 = "JAVASCRIPT";
// document.write(str1.toUpperCase());
// document.write(str2.toLowerCase());


// slice

// var str = 'JavaScript';
// document.write(str.slice(0, 3) + "<br>");
// document.write(str.slice(0, -6) + "<br>");
// document.write(str.slice(4) + "<br>");

// var name = prompt('enter name','');
// document.write(name.charAt(0).toUpperCase() + name.slice(1));

// substr - от и колличество символов

// var str = "JavaScript";
// document.write(str.substr(4,6) + "<br>");

// Взятие подстроки
// substring - от и до, но не включая до

// var str = "JavaScript";
// document.write(str.substring(4,7) + "<br>");
// document.write(str.substring(4) + "<br>");

// Поиск подстроки
// indexOf(позиция, [начальная позиция]) (регистрозависимый)

// var str = "Lorem ipsum doLor sit amet.";
// document.write(str.indexOf("Lorem") + "<br>");
// document.write(str.indexOf("orem") + "<br>");
// document.write(str.indexOf("Sit") + "<br>");
// document.write(str.indexOf("Lo", 3) + "<br>");


// ПРАКТИЧЕСКОЕ ЗАДАНИЕ (В JS нет функции ucFirst. пишем свою)

// function ucFirst(str) {
//     if (str) {
//         return str[0].toUpperCase() + str.slice(1);
//     }
// }
// document.write(ucFirst("javaScript"));

// ПРАКТИЧЕСКОЕ ЗАДАНИЕ (Пишем функцию для усечения строк)

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 3) + "...";
//     }
//     return str;
// }

// function truncate(str, maxL) {
//     if (str.length > maxL) {
//         return str.slice(0, maxL - 3) + '...'
//     }
//     return str
// }
// var anyStr1 = "Lorem ipsum dolor sit amet.";
// var anyStr2 = "John Legends official music video for All Of Me.";
// document.write(truncate(anyStr1, 23) + "<br>");
// document.write(truncate(anyStr2, 23) + "<br>");

