"use strict";

/* Popoxakanneri tesaknery JavaScript lezvum*************************************************/
/**
 * Оператор typeof возвращает тип аргумента.
 * У него есть два синтаксиса: со скобками и без:
 * Синтаксис оператора: typeof x.
 * Синтаксис функции: typeof(x).
 * Результатом typeof является строка, содержащая тип:
 */

// type number

// var a = 123;
// var b = 123.45;
// alert(typeof a);
// alert(typeof(b));


// Единый тип (число number) используется как для целых, так и для дробных чисел.

// специальные числовые значения

// infinity

// при делении на ноль

// alert(1/0);
// var varType = 1 / 0;
// alert(varType);
// alert(typeof varType);

// NaN
// результат некорректной математической операции

// alert("string" * 2);
// var varType = "string" * 2;
// alert(varType);
// alert(typeof varType);

/* string **********************************************************************/
// var str1 = "Какая-то 'строка' 1";
// var str2 = 'Какая-то "строка" 2';
// var str3 = "Какая-то \"строка\" 3";
// document.write(str1 + "<br>");
// document.write(str2 + "<br>");
// document.write(str3 + "<br>");
// alert(typeof str1);
// alert(typeof str2);
// alert(typeof str3);

/* boolean (bool) TRUE FALSE *******************************************************/
// var a = 5;
// var b = 15;
// alert(a === b);

// var varType = a === b;
// alert(typeof varType);

// var varType = a < b;
// alert(varType);
// alert(typeof varType);

// alert(true == 1);
// alert(false == 0);

/* null ************************************************************************/
// ничего или значение не известно
// var name1 = null;
// alert(name1);
// alert(typeof name1);


/* undefined ******************************************************************/
/**
 * имеет смысл «значение не присвоено».
 * В явном виде undefined обычно не присваивают, так как это противоречит его
 * смыслу. Для записи в переменную «пустого» или «неизвестного» значения
 * используется null.
 */

// var a;
// alert(a);
// alert(typeof a);

/* object { } *******************************************************************/

// var cars = {};
// alert(typeof cars);
// var user = {
//     firstName: 'Jon',
//     lastName: 'Snow',
//     age: 30
// };
// alert(typeof user);
// alert(user.firstName);
// alert(user.lastName);
// alert(user.age);

// alert(typeof user.firstName);
// alert(typeof user.lastName);
// alert(typeof user.age);

/* Оператор typeof **********************************************************/
// alert(typeof undefined); //
// alert(typeof 0); //
// alert(typeof true); //
// alert(typeof "string"); //
// alert(typeof {}); //
// alert(typeof null); // "object" (официально признанная ошибка, сохраняется для совместимости)
// alert(typeof function(){}); // "function" (функции - подвид объектов, но на практике очень удобно, что мы можем проверить - функция ли это)

// alert(1 === true); //
// alert(1 == true);  //
// alert(1 === false); //
// alert(false === true); //
// alert(true == true); //
// alert(true == 0); //
// alert(false === 0); //
// alert(true == 'string'); //
// alert(true === 'string'); //
// alert(undefined == 0); //
// alert(undefined === 0); //
// alert(true == undefined); //
// alert(false == undefined); //
// alert(false === undefined); //
// alert(undefined == undefined); //
/************************ Основные операторы *****************************/
// Термины: «унарный», «бинарный»,           «операнд», «аргумент оператора»

// Операнд – то, к чему применяется оператор.
// Операнд или аргумент оператора
// var result = 5 + 10; // левый операнд и правый операнд

// Унарный оператор -
// Унарным называется оператор, который применяется к одному операнду.
// var a = 5;
// alert(a);
// a = -a;
// alert(a);

// Бинарный оператор -
// Бинарным называется оператор, который применяется к двум операндам.
// var a = 15;
// var b = 5;
// var c = a - b;
// alert(c);

// Бинарный оператор +
// var a = 15;
// var b = 35;
// var result = a + b;
// alert(result);

// var num = 5;
// var numStr = 15;
// var result = num + numStr;
// alert(result);

// Если хотя бы один аргумент является строкой, то второй будет также преобразован к строке!
// Бинарный оператор + (конкатeнация)

// var part1 = "Java";
// var part2 = "Script";
// alert(part1 + part2);

// var num = 5;
// var numStr = "5";
// var result = num + numStr;
// alert(result);

// все остальные операторы работают с числами
// var a = "10";
// var b = 2;
// var c = a / b;
// alert(c);

// alert("5" - 1);

// Унарный оператор +, преобразование к числу
// alert(+5 - 2); // унарный оператор + ничего не делает с числами

// "побочный еффект" унарного +

// var a = 5;
// var b = "15";
// var result = a + +b;
// alert(result);

/****************************** ПРИОРИТЕТ **********************************/
// У унарного + приоритет больше чем у бинарого +
// var a = "5";
// var b = "15";
// var result = +a + +b;
// alert(result);

// У скобок приоритет больше
// var a = 2;
// var b = 2;
// var c = 1;
// var result = a * b + c;
// var result2 = a * (b + c);
// alert(result);
// alert(result2);

// Оператор присвоивание имеет низкий приоритет ( = )
// возможно присваивание по цепочке
// var a, b, c;
// a = b = c = 2 + 2;
// alert(a);//
// alert(b);//
// alert(c);//

// var a = 1;
// var b = 2;
// var c = 3 - (a = b + 1);
// alert(a); //3
// alert(c);  //0


// var a = 12;
// var b = '24';
// var c = '2';
// var d = +b + a;
// alert(); // ->  32 // bolor popoxakanner@ ogtagorcelov

/*************************** ОСТАТОК ОТ ДЕЛЕНИЯ % ***********************/
// var a = 5 % 2; // 1
// var b = 8 % 3; // 2
// var c = 6 % 3; // 0
// alert(a);
// alert(b);
// alert(c);

/********************** ИНКРЕМЕНТ/ДЕКРЕМЕНТ ++ -- **********************/
// Инкремент
// var i = 2;
// // alert(i + 1);
// i++;
// alert(i);

// Декремент
// var i = 2;
// alert(i - 1);
// i--;
// alert(i);
//
// Инкремент/Декремент можно применить только к переменным
// alert(5++);
// alert(5--);

// Префиксная форма
// var i = 1;
// var a = ++i;
// alert(a);

// Постфиксная форма
// var i = 1;
// var a = i++;
// alert(a); //
// alert(i); //




// У инкремент/декремент более высокий приоритет чем у арифметических операторов
// var i = 1;
// alert(2 * ++i);
// alert(i);

// var i = 1;
// alert(2 * i++);
// alert(i);


// Сокращённая арифметика с присваиванием
// Когда нужно применить оператор к переменной и сохранить результат в ней же
// var a = 2;
// a = a + 5;
// alert(a);

// var a = 2;
// a += 5;
// alert(a);

// var a = 5;
// a *= 5;
// alert(a);

// Вызов с присваиванием имеет в точности такой же приоритет, как обычное присваивание
// var a = 2;
// a *= 3 + 5 * 2;
// alert(a); //

// var b = '12';
// var c = 6;
// alert(c *= +b - (c *= +b - --c));



///// Practice  //////

//---1---Popoxel hetevyal codn aynpes, vor ayntex ogtagorcven hetevyal gorcoxutyunnery +=, -=, *=, /=, ++, --. 
// toxeri qanakutyuny chpetqa popoxvi:
/*
Harc:
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);

Patasxan:
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);
*/

//---2---Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
// Затем создайте переменную d, присвойте ей значение 7. 
// Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
/*
var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c + d;
alert(result);
*/