/**
 * forEach() используется для перебора массива
 */
// var cars = ["Audi", "Mercedes", "BMW", "Nissan", "Toyota", "Hyundai"];
// cars.forEach(function(element, key, cars) {
//     document.write('Key: <b>' + key + "</b> | Element: <b>" + element + "</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>( " + cars + " )</b><br>");
// });



/**
 * filter() Он создаёт новый массив, в который войдут только те элементы,
 * для которых вызов callback возвратит true.
 */

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var newNumArr = numbers.filter(function (element) {
//     if ((element % 2) == 0) {
//         return element;
//     }
// });
// document.write(newNumArr + '<br>');
// document.write(numbers);



/**
 * map() Он создаёт новый массив, который будет состоять из
 * результатов вызова callback
 */
// var brands = ["Audi", "Mercedes", "BMW", "Nissan", "Toyota", "Hyundai"];
// var brandLetterCount = brands.map(function (element) {
//     return element.length;
// });
// for (var j = 0; j < brandLetterCount.length; j++) {
//     document.write(brands[j] + " - " + brandLetterCount[j] + "<br>");
// }


/**
 * ПСЕВДОМАССИВ АРГУМЕНТОВ "arguments"
 * В JavaScript любая функция может быть
 * вызвана с произвольным количеством аргументов.
 */
// function go(a, b) {
//     alert("a = " + a + ", b = " + b);
// }
// go(1, 2);

// go(1, 2, 3);


/**
 * В некоторых языках можно определить 2 функции с одинаковыми именами
 * но с разными и с разным колличеством аргументов
 * А уже интерпретатор сам решит кого вызвать в зависимости от переданных аргументов
 * А в JS можно вызвать функцию с произвольным колличеством аргументов и уже интерпретатор
 * посмотрит с чем вызвана данная функция и решит как отработать
 */
// function myFunc() {
//     //----------- 
// }
// function myFunc() {
//     //-----------  
// }

// myFunc()


// Как получить доступ к "лишним" аргументам | «псевдо-массив» arguments
// Получаем список аргументов

// function getNames() {
//     for (var i = 0; i < arguments.length; i++) {
//         document.write(arguments[i] + '<br>');
//     }
// }
// getNames('JavaScript', 'JQuery', 'Facebook React', 'Twitter Bootstrap');



// function myNum(a, b) {
//     console.log(arguments);
//     for (var i = 0; i < arguments.length; i++) {
//         document.write(arguments[i] + "<br>");
//     }
// }
// myNum(1, 2, 3, 4, 5);


/**
 * argument ЭТО НЕ МАССИВ, нельзя использовать методы массива
 * argument ЭТО ОБЪЕКТА, просто ключи числовые и есть свойство length
 * Но можно  сделать массив из arguments
 */
// ПРАКТИЧЕСКОЕ ЗАДАНИЕ (скопировать все аргумены из arguments в новый массив)

// function myFunc() {
//     var args = [];
//     for (var i = 0; i < arguments.length; i++) {
//         // args[i] = arguments[i];
//         args.push(arguments[i]);
//     }
//     return args;
// }
// var numArray = myFunc(1,2,3,4,5);
// console.log(numArray);
// alert(numArray);
// document.write(numArray);


/**
 * Если функция вызвана с меньшим количеством аргументов, чем указано,
 * то отсутствующие аргументы считаются равными undefined.
 */
// function showMessage(width, height, title) {
//     if (width === undefined) {
//         width = 200;
//     }
//     if (height === undefined) {
//         height = 100;
//     }
//     if (title === undefined) {
//         title = "Warning";
//     }
//     document.write(width + ' ' + height + ' ' + title + '<br>')
// }

// showMessage();
// showMessage(100, 560);
// showMessage(130, 720, 'Title');


// 

// PRACTICE TASK
//


// function createBlock() {
//     var width = +prompt('Enter width', 0);
//     var height = +prompt('Enter height', 0);
//     var color = prompt('Enter color', '');
//     var border = +prompt('enter border width',0);
//     var borderColor = prompt('enter border color','');
//     if (width === 0 || height === 0 || color === '' || border === 0 || borderColor === '') {
//         width = height = 200;
//         color = 'red';
//         border = 4;
//         borderColor = 'yellow';
//     }
//     var myBlock = document.createElement('div');
//     myBlock.style.width = width + 'px';
//     myBlock.style.height = height + 'px';
//     myBlock.style.backgroundColor = color;
//     myBlock.style.margin = 'auto';
//     myBlock.style.border = border + 'px' + ' solid ' + borderColor;
//     myBlock.style.borderRadius = '50%';
//     myBlock.style.boxShadow = '5px 5px 10px pink';
//     document.body.appendChild(myBlock);
// }
// createBlock();

// var number = [2,1,3,4,5,6,7,8,9,234,435,457,678,789,345,345,789,7899,234,345,678];
// function getMaxArray(num) {
//     var max = num[0];
//     for (var i = 0; i < num.length; i++){
//         if(max < num[i]){
//             max = num[i];
//         }
//     }
//     document.write(max);
// }
// getMaxArray(number);


// function kent(nums) {
//     var arr = nums.split('');
//     var res = false;
//     for (let i = 0; i < arr.length; i++) {
//         if ((+arr[i] % 2) == 0) {
//              return res = false
//         }        
//     }
//     return res;
// }
// alert(kent(prompt('tiv', '')))

// var num = [1,2,3,4,5,6,7,8,9,10];
// function odd(arr) {
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             document.write(arr[i] + ' ');
//         }   
//     }
// }
// odd(num);

// var num = prompt('enter number', '');
// if(+num % 2 === 0 && num !== null){
//     alert('even');
// } else if(num === null){
//     alert('cancel');
// } else{
//     alert('odd');
// }


// with recursion

// var numbers = [7, 2, 35,3, 4,71, [5, 6, 7, [8, 900]]];
// var result2 = 0;
// var result1 = numbers[0];
// function num(anyArr) {
//     if (Array.isArray(anyArr)) {
//         for (var i = 0; i < anyArr.length; i++) {
//             num(anyArr[i]);
//         }
//     } else {
//         result2 = anyArr;
//         if (result2 > result1) {
//             result1 = result2;
//         }
//     }
//     return result1;
// }
// document.write(num(numbers));