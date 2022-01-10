/******************** ARRAY ****************/

// var fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits);
// alert(typeof fruits);
// document.write(fruits[0] + "<br>");
// document.write(fruits[1] + "<br>");
// document.write(fruits[2] + "<br>");

// Элемент можно всегда заменить
// fruits[2] = "Strawberry";
// console.log(fruits);

// Или добавить:
// fruits[25] = "Pear";
// document.write(fruits[25] + "<br>");
// console.log(fruits);

// Общее число элементов
// var names = ['Aram','Artur','Vazgen','Karen','Armen','Poxos','Petros'];
// document.write("Общее число элементов - " + names.length);
// ПРАКТИЧЕСКОЕ ЗАДАНИЕ (Вывести в браузер последний элемент массива)

// document.write(names[names.length - 1]);

// В массиве может храниться любое число элементов любого типа.

// var arr = [1, 'JavaScript', {name: 'Jon', age: 30}, true];
// console.log(arr);
// document.write(arr[1] + "<br>");
// document.write(arr[2].name + "<br>");
// document.write(arr[2]['age'] + "<br>");



// Методы для работы с массивом ( pop / push / shift / unshift )

// var fruits = ["Apple", "Orange", "Plum", "Melon"];
// console.log(fruits);

// pop() Удаляет последний элемент из массива и возвращает его:

// var lastElements = fruits.pop();
// console.log(fruits);
// console.log(lastElements);

// push() Добавляет элемент в конец массива:

// fruits.push("Pear");
// console.log(fruits);

// shift() Удаляет из массива первый элемент и возвращает его:

// var firstElements = fruits.shift();
// fruits.shift();
// console.log(fruits);
// console.log(firstElements);

// unshift() Добавляет элемент в начало массива:

// fruits.unshift("Strawberry");
// console.log(fruits);

// Методы push и unshift могут добавлять сразу по несколько элементов:

// fruits.unshift("Orange", "Orange", "Orange");
// fruits.push("Orange", "Orange");
// console.log(fruits);

// var cars = ['audi','bmw', 'nissan','lada'];
// 
// document.write(cars); //  => nissan, bmw, nissan,  lexus, lada, mercedes

// Массив – это объект, где в качестве ключей выбраны цифры
// Так как это объект, то в функцию он передаётся по ссылке:



// var arr = ["BMW", "KIA", "NISSAN", "HONDA"];
// var newArr = arr;
// console.log(arr);
// console.log(newArr);
// newArr[4] = 'MERCEDES';
// console.log(arr);
// console.log(newArr);

// можно присваивать в массив любые свойства.

// var myArr = [];
// myArr[200] = 5;
// myArr.age = 25;
// myArr[700] = "Vardan";
// console.log("Колличество элементов в массиве - " + myArr.length);
// console.log(myArr);

// При уменьшении length массив укорачивается, вернуть невозможно

// var arr = ["BMW", "KIA", "NISSAN", "HONDA"];
// console.log(arr);
// arr.length = 2;
// console.log(arr);

// Самый простой способ очистить массив

// var arr = ["BMW", "KIA", "NISSAN", "HONDA"];
// console.log(arr);
// arr.length = 0;
// console.log(arr);

// Многомерные массивы

// var carInfo = [ "Nissan",["Japan", "X_Trail", "50.000$"],"BMW",["Germany", "X-5", "100.000$"],"KIA",["Korea", "RIO", "40.000$"] ];
// // console.log(carInfo);



// for (var i = 0; i < carInfo.length; i++) {
//     if (Array.isArray(carInfo[i])) {
//         for (var j = 0; j < carInfo[i].length; j++) {
//             document.write("&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: coral; font-size: 14px;'>" + carInfo[i][j] + "</span><br>");
//         }
//     } else {
//         if (carInfo[i] == 'Nissan') {
//             document.write("<span style='color: dodgerblue;'>" + ' - ' + "</span><br>");            
//         }else{
//             document.write("<span style='color: dodgerblue;'>" + carInfo[i] + "</span><br>");
//         }
//     }
// }


/************************ Рекурсия ***********************/

function factoryal(num){
    if(num < 2){
        return 1;
    }
    return num * factoryal(num - 1);
}
factoryal(5);

// var numbers = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12, [13, 15, [16, 17, 18]]] ] ];
// var retArr = [];

// function newArr(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (!Array.isArray(arr[i])) {
//             retArr.push(arr[i]);
//         }        
//         else{
//             newArr(arr[i]);
//         }
//     }
//     return retArr;
// }

// console.log(newArr(numbers));

// function dWN(n){
//     if (n) {
//         document.write(n);
//         dWN(n - 1)
//     }
// }

// dWN(5)



// function myArray() {
//     for (var i = 0; i < numbers.length; i++) {
//         if (Array.isArray(numbers[i])) {
//             for (var j = 0; j < numbers[i].length; j++) {
//                 if (Array.isArray(numbers[i][j])) {
//                     for (var k = 0; k < numbers[i][j].length; k++) {
//                         if (!Array.isArray(numbers[i][j][k])) {
//                             document.write(numbers[i][j][k]);
//                         }
//                     }
//                 } else {
//                     document.write(numbers[i][j]);
//                 }
//             }
//         } else {
//             document.write(numbers[i]);
//         }
//     }
// }

// myArray();


// var numbers = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, [11, 12, [13]]]]];

// function rec(arr) {
//         for (var i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 rec(arr[i]);
//             } else {
//                 document.write(arr[i] + ' ');
//             }
//         }
// }
// rec(numbers);


// var result = 0;
// var numbers = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12, 13] ] ];
// function countingElements(anyArray) {
//     if (Array.isArray(anyArray)) {
//         for (var i = 0; i < anyArray.length; i++) {
//             countingElements(anyArray[i]);
//         }
//     } else {
//         result += anyArray;
//     }
//     return result;
// }
// alert(countingElements(numbers));



/************************ End Рекурсия ***********************/



// Массивы: МЕТОДЫ
// split( разделитель [ ограничение элементов ] )

// var namesStr = "Armen, Gor, Aram, Tigran";
// var namesArr = namesStr.split(', ');
// console.log(namesArr);
// var namesArr = namesStr.split(', ', 2);
// console.log(namesArr);
// for (var i = 0; i < namesArr.length; i++) {
    // document.write('You Have a message ' + namesArr[i] + "<br>");
// }


// Вызов split с пустой строкой разобьёт по буквам:

// var str = "JavaScript";
// var arr = str.split('');
// console.log(arr);


// join( разделитель ) противоположное split()

// var namesArr = ['Armen', 'Gor', 'Aram', 'Tigran'];
// var namesStr = namesArr.join(" / ");
// console.log(namesStr);


// Не очень удобное удаление из массива delete

// var namesArr = ['Armen', 'Gor', 'Aram', 'Tigran'];
// console.log(namesArr);
// delete namesArr[2];
// console.log(namesArr);


/**
 * Нормальное удаление arr.splice(index[, deleteCount, elem1, ..., elemN])
 * Возвращает массив из удаленных элементов
 * Удалить deleteCount элементов начиная с index ( включительно index )
 */

// Удаление

// var carsArr = ['NISSAN', 'BMW', 'AUDI', 'KIA', 'HYUNDAI', 'HONDA'];
// var car = carsArr.splice(1, 2);
// console.log(carsArr);
// console.log(car);


// Удаление и вставка
// var carsArr = ['NISSAN', 'BMW', 'AUDI', 'KIA', 'HYUNDAI', 'HONDA'];
// var car = carsArr.splice(4,2,"LADA", "VOLGA");
// console.log(carsArr);
// console.log(car);


// Вставка без удаления

// var carsArr = ['NISSAN', 'BMW', 'AUDI', 'KIA', 'HYUNDAI', 'HONDA'];
// carsArr.splice(3,0,"MERCEDES", "VOLVO");
// console.log(carsArr);
