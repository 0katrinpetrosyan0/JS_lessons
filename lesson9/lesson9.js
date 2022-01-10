// "use strict";

/**
 * Если переменная или функция не находятся внутри конструкции function, то они – «глобальные».
 * В JavaScript все глобальные переменные и функции являются свойствами специального объекта.
 * В браузере этот объект явно доступен под именем window.
 */

// Присваивая или читая глобальную переменную,
// мы, фактически, работаем со свойствами window.



// var a = 5;
// var a1;
// console.log(window.a);
// // явное присваивание
// window.a = 5;
// alert(a);

// console.log(window);

/***************** OBJECT *****************/

// Вариант 1

// var person = Object();
// Вариант 2
// var person = {};

// Работа с объектом
// Создаем пустой объект

// var person = {};
// console.log(person);

// Записываем в пустой объект новые данные
// person.name = "Jon";
// person.age = 30;
// console.log(person);

// Читаем из объекта данные

// console.log(person);
// alert(person.name);
// alert(person.age);
// document.write("Name: " + person.name +"<br> Age: "+ person.age);

// Удаляем из объекта данные

// console.log(person);
// delete person.age;
// console.log(person);

// Проверяем существует ли данное свойство(key) в объекте 1

// var person = {};
// person.age = 30;
// console.log(person);
// delete person.age;
// console.log(person);
// if (!("age" in person)) {
//     document.write("<br> В объекте person отсутствует свойство age <br>");
// }

// Проверяем существует ли данное свойство в объекте 2

// var person = {};
// person.age = 30;
// alert(person.name);

// if (person.age !== undefined) {
//     alert('Age YES');
// }
// if (person.name !== undefined) {
//     alert('Name YES');
// }

// Разница между проверкой через оператор ( in ) и сравнение с ( undefined )
// Но все же наше свойство присутствует, просто значение у него ( undefined )

// var person = {};
// person.name = undefined;
// alert(person.name);
// alert(person.age);
// if (person.age === undefined) {
//     alert('AGE undefined');
// }
// if (person.name === undefined) {
//     alert('NAME undefined');
// }
// 
// Но оператор ( in ) гарантирует правильный результат:

// var obj = {};
// obj.test = undefined;
// alert("test" in obj);
// alert("age" in obj);

// Доступ к объекту через квадратные скобки

// var person = {};
// person["age"] = 30;
// person["name"] = "JavaScript";
// console.log(person);
// document.write(person['age']);
// document.write("<br>");
// document.write(person['name']);

// Оба варианты идентичны но квадратные скобки
// позволяют использовать в качестве имени свойства любую строку


// var person = {};
// person['beautiful color'] = "coral";
// document.write(person['beautiful color']);
// document.write("<br><b style='color: "+ person['beautiful color'] +"'>beautiful color</b>");

// Еще ТОЛЬКО через [] можно обратиться к свойству если
// имя свойства хранится в переменной

// var cars = {};
// cars.brand = "Nissan";
// cars.model = "X-Trail";
// var propName = "model";
// document.write(cars[propName]);

// Литеральный способ создания объекта

// var person = {
//     name: 'Jon',
//     age: 30,
//     "last name": 'Snow'
// };
// console.log(person);

// Nerkarucvac Object

// var cars = {
//     brand: "KIA",
//     model: "Optima",
//     "my car": "Nissan",
//     price: {
//         min: "50.000$",
//         max: "80.000$",
//         "new price": "100.000$"
//     }
// };
// console.log(cars);

// document.write(cars.brand + "<br>");
// document.write(cars["my car"] + "<br>");
// document.write(cars.price.min + "<br>");
// document.write(cars.price["new price"] + "<br>");

// Nerkarucvac Object 2

// var cars = {};
// cars.japan = {};
// cars.japan.Nissan = {1: 'X-Trail', 2: 'TIDA', 3: 'SANNY'};
// cars.germany = {};
// cars.germany.brand =  'Mercedes';
// cars.germany.model =  'Brabus';
// console.log(cars);

// Цикл ( for in ) для объектов

// var price = {
//     bentley: "200.000$",
//     mercedes: "150.000$",
//     bmw: "100.000$",
//     nissan: "50.000$"
// };
// for (var key in price) {
//     document.write(key + ' - ' + price[key] + "<br>");
// }


// Xndir

// Написать функцию ucFirst() и в цикле все свойства написать с большой буквой


// var price = {
//     bentley: "200.000$",
//     mercedes: "150.000$",
//     bmw: "100.000$",
//     nissan: "50.000$"
// };

// function ucFirst(str) {
//     var newStr = str[0].toUpperCase() + str.slice(1);
//     return newStr;
// }

// for (var propName in price) {
//     document.write(ucFirst(propName) +" - "+ price[propName] + "<br>");
// }

// Чтобы узнать колличество свойств в объекте нет готового решения

// var price = {
//     bentley: "200.000$",
//     mercedes: "150.000$",
//     bmw: "100.000$",
//     nissan: "50.000$"
// };
// var i = 0;
// for (var propName in price) {
//     i++;
// }
// document.write(i);


// ПРАКТИЧЕСКОЕ ЗАДАНИЕ (проверка объекта на пустоту)

// function isEmpty(obj) {
//     for (var key in obj) {
//         return false;
//     }
//     return true;
// }
// var obj1 = {};
// var obj2 = {};
// obj2.name = 'JavaScript';
// //
// if (isEmpty(obj2)) {
//     alert('Объект пустой');
// } else {
//     alert('Объект не пустой');
// }


// ПРАКТИЧЕСКОЕ ЗАДАНИЕ (Кто получает больше и сколько)

// var person = {
//     'Pogos': 3000,
//     'Petros': 5000,
//     'Kikos': 1000
// };
// //
// var count = 0;
// var name = '';
// for (var key in person) {
//     if (count < person[key]) {
//         count = person[key];
//         name = key;
//     }
// }
// document.write(name + ' - ' + count);


// var car = {
//     bmw: '100.000',
//     nissan: '40.000',
//     lada: '1.000',
//     audi: '80.000',
//     lexus: '120.000'
// };
//
//
// // for (var i in car){
// //     break
// // }
//
// var count = 0;
// var count1 = car[i];
// var name = '';
// var name1 = '';
// for (var key in car){
//     if(count < parseFloat(car[key])){
//         count = car[key];
//         name = key;
//     }
// }
//
// for (var key1 in car){
//     if(count1 > parseFloat(car[key1])){
//         count1 = car[key1];
//         name1 = key1;
//     }
// }
//
// document.write(name + ' - ' + count + '$' + '<br>');
// document.write(name1 + ' - ' + count1 + '$');


// Объекты: передача по ссылке
// Пример с переменными

// var carBrand = "Nissan";
// var newCarBrand = carBrand;
// document.write(carBrand + "<br>");
// document.write(newCarBrand + "<br>");
// newCarBrand = "BMW";
// document.write(newCarBrand + "<br>");
// document.write(carBrand + "<br>");

// Пример с объектами

// var user = {
//     name: "Jon",
//     age: 40
// };
// console.log(user);
// var newUser = user;
// console.log(newUser);
// newUser.name = "Armen";
// newUser.age = 25;
// console.log(user);
// console.log(newUser);

// Клонирование объектов ( создание самостоятельной копии )

// var user = {
//     name: "Jon",
//     age: 30
// };

// // console.log(user);
// var userClone = {};
// for (var name in user) {
//     userClone[name] = user[name];
// }

// console.log(user);
// console.log(userClone);
// userClone.country = "USA";
// userClone.age  = 50;
// console.log(user);
// console.log(userClone);


// ПРАКТИЧЕСКОЕ РЕШЕНИЕ К РАССМОТРЕНИЮ ( Добавить класс если он отсутствует )

// function addClass(obj, cls) {
//     var classes = obj.className ? obj.className.split(' ') : [];
//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) {
//             alert("Данный класс существует");
//             return;
//         }
//     }
//     classes.push(cls);
//     obj.className = classes.join(' ');
// }
// var h2 = {
//     className: 'open menu'
// };
// addClass(h2, 'new');
// addClass(h2, 'open');
// addClass(h2, 'navbar thumbnail');
// alert(h2.className);


/**********************END OBJECT******************/

/* Методы объектов, this **************************************************/

// var user = {
//     name: "Admin",
//     sayHi: function () {
//         alert("Hello JavaScript !!!");
//     }
// };
// user.sayHi();

// var user = {
//     name: "Admin"
// };
// user.sayHi = function () {
//     alert("Hello JavaScript !!!");
// };
// user.sayHi();

/**
 * Для доступа к текущему объекту из метода используется ключевое слово this.
 * Значением this является объект перед «точкой», в контексте которого вызван метод
 */

// var user = {
//     name: "Admin",
//     sayHi: function () {
//         alert("Hello " + this.name);
//     }
// };
// user.sayHi();

// Вместо this внутри sayHi можно было бы обратиться к объекту, используя переменную user:

// var user = {
//     name: "Admin",
//     sayHi: function () {
//         alert("Hello " + user.name);
//     }
// };
// user.sayHi();

// Но данный вариант нестабилен

// var user = {
//     name: "Admin",
//     sayHi: function () {
//         alert("Hello " + user.name);
//     }
// };
// var user2 = user; // "Копируем объект"
// user = null; // "Изменяем объект"
// user2.sayHi();
// console.log(user2);

// Через this метод может не только обратиться к любому свойству объекта,
// но и передать куда-то ссылку на сам объект целиком:

// var user = {
//     name: "Admin",
//     sayHi: function () {
//         showUserName(this);
//     }
// };

// function showUserName(anyObj) {
//     alert(anyObj.name);
// }
// user.sayHi();

// Любая функция может иметь в себе this. Совершенно неважно,
// объявлена ли она в объекте или отдельно от него.
// Эта функция ещё не знает, каким будет this. Это выяснится при выполнении программы.
// Если одну и ту же функцию запускать в контексте разных объектов, она будет получать разный this:

// var user = {
//     firstName: "User"
// };
// var admin = {
//     firstName: "Admin"
// };
// console.log(user);
// console.log(admin);
// function getFirstName() {
//     alert("Hello " + this.firstName);
// }
// user.sayHi = getFirstName;
// admin.sayHi = getFirstName;

// console.log(user);
// console.log(admin);

// user.sayHi();
// user["sayHi"]();
// admin.sayHi();
// admin["sayHi"]();