"use strict"; // Строгий режим нужно активировать в начале файла

/******  __proto__  ******/

// // Если один объект имеет специальную ссылку __proto__ на другой объект, то при чтении свойства из него,
// // если свойство отсутствует в самом объекте, оно ищется в объекте __proto__.

var animal = {
    eats: true
};

var rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
alert( rabbit.jumps ); // true
alert( rabbit.eats ); // true
console.log( animal.__proto__ ); // undefined



// Объект, на который указывает ссылка __proto__, называется «прототипом».
// В данном случае получилось, что animal является прототипом для rabbit.
// прототип используется исключительно при чтении.


var animal = {
    eats: true
};

var rabbit = {
    jumps: true,
    eats: false
};

rabbit.__proto__ = animal;

alert(rabbit.eats); // false, свойство взято из rabbit.

var obj1 ={
    name: 'John'
};
// //
var obj2 ={
    'last name': 'Lennon'
};
// //
var obj3 ={
    age: 40
};
// //
obj1.__proto__ = obj2;
obj2.__proto__ = obj3;
// //
document.write(obj1.name + ' ' + obj1['last name'] + ' ' + obj1.age);

//   hasOwnProperty

// Обычный цикл for..in не делает различия между свойствами объекта и его прототипа.

var animal = {
    eats: true
};

var rabbit = {
    jumps: true,
    __proto__: animal
};

for (var key in rabbit) {
    alert(key);
}


var animal = {
    eats: true
};

var rabbit = {
    jumps: true,
    name: 'Babken',
    __proto__: animal
};

var obj = {};
console.log(obj);

alert( rabbit.hasOwnProperty('jumps') ); // true: jumps принадлежит rabbit.

alert( rabbit.hasOwnProperty('eats') ); // false: eats не принадлежит.


for (var key in rabbit) {
    if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
    alert(key); // выводит только "jumps"
}



// Object.create(null)

var data = {};
console.log(data);
alert(data.toString);

var data = Object.create(null);
console.log(data);
data.text = "Hello";

alert(data.text); // Hello
alert(data.toString); // undefined

var obj = {
    data:'name'
};

var obj2 = {
    data2:'name2',
    data3:'name3',
    data4:'name4',
    data5:'name5',
    data6:'name6'
};

obj.__proto__ = obj2;

console.log(Object.getPrototypeOf(obj));


var obj = {
    data:'name'
};

var obj2 = {
    data2:'name2'
};

// var obj3 = {
//     data3:'name3'
// };

// Object.setPrototypeOf(obj, obj2);

// Object.setPrototypeOf(obj, Object.setPrototypeOf(obj2, obj3));

// console.log(obj);


// // Practices

// var animal = {
//     jumps: null
// };

// var rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

// alert( rabbit.jumps ); //

// delete rabbit.jumps;

// alert( rabbit.jumps ); //

// delete animal.jumps;

// alert( rabbit.jumps ); //


// var animal = {
//     eat: function() {
//         this.full = true;
//     }
// };

// var rabbit = {
//     __proto__: animal
// };

// rabbit.eat(); // ?

// console.log(rabbit);//
// console.log(animal);//

/******  __proto__  ******/


/****** Замыкания (Closures) ******/

// // LexicalEnvironment.
// // Все переменные внутри функции – это свойства специального внутреннего объекта LexicalEnvironment,
// // который создаётся при её запуске и записывает туда аргументы, функции и переменные..

// var a = 5;
// function f() {
//     var a = 5;
// }
// f();

// alert(window.a); // undefined

// // В отличие от window, объект LexicalEnvironment является внутренним, он скрыт от прямого доступа.

// function f() {
//     var a = 5;
//     alert(LexicalEnvironment);
// }
// f();
// alert(LexicalEnvironment.a); // error

// function sayHi(name) {
//     var phrase = "Hello " + name;
//     alert(phrase);
// }

// sayHi('John');

// function sayHi(name) {
// //     // LexicalEnvironment = { name: 'John', phrase: undefined }
    
//     var phrase = "Hello " + name;
// //     // LexicalEnvironment = { name: 'John', phrase: 'Hello John'}
//     alert(phrase);
// }

// sayHi('John');


// // Из функции мы можем обратиться не только к локальной переменной, но и к внешней.
// // При создании функция получает скрытое свойство [[Scope]], которое ссылается на лексическое окружение, в котором она была создана.

// var userName = "John";
// //
// function sayHi() {
//     // var userName = "Lenon";

//     alert(userName); // j
// }

// sayHi();

// var phrase = 'Hello';

// function sayHi(name) {
//     alert(phrase + ' ' + name);
// }

// sayHi('John');  // Hello John

// phrase = 'Goodbye';

// sayHi('John'); // Goodbye John


function sayHiBye(firstName, lastName) {
    alert( "Hello " + getFullName() );
    alert( "Goodbye " + getFullName() );

    function getFullName() {
        return firstName + " " + lastName;
    }
}

sayHiBye("John", "Lennon"); // Hello John Lennon ; Goodbye John Lennon


// Заметим, что если переменная не найдена во внешнем объекте переменных,
// то она ищется в ещё более внешнем (через [[Scope]] внешней функции.

var phrase = 'Hello';

function say() {

    function go() {
        alert( phrase ); // найдёт переменную снаружи
    }

    go();
}

// say();


// // Возврат функции.
// // внутри одной функции создаётся другая и возвращается в качестве результата.

// function makeCounter() {
//     var currentCount = 1;
  
    return function() { // (**)
        return currentCount++;
    };
}
//
var counter = makeCounter(); // (*)
//
// // // каждый вызов увеличивает счётчик и возвращает результат
alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3
//
// // создать другой счётчик, он будет независим от первого
var counter2 = makeCounter();
alert( counter2() ); // 1

// // Они независимы, потому что при каждом запуске makeCounter создаётся свой объект переменных LexicalEnvironment,
// // со своим свойством currentCount, на который новый счётчик получит ссылку [[Scope]].


// // Как видно, мы получили два независимых счётчика counter и counter2,
// // каждый из которых незаметным снаружи образом сохраняет текущее количество вызовов.
// // Где? Конечно, во внешней переменной currentCount, которая у каждого счётчика своя.

// function makeCounter() {
//     var currentCount = 1;

//     return function() {
//         return currentCount++;
//     };
// }
// //
// var counter = makeCounter(); // [[Scope]] -> {currentCount: 1}
// //
// alert( counter() ); // 1, [[Scope]] -> {currentCount: 1}
// alert( counter() ); // 2, [[Scope]] -> {currentCount: 2}
// alert( counter() ); // 3, [[Scope]] -> {currentCount: 3}

// // Переменную во внешней области видимости можно не только читать, но и изменять.

// // замыкание – это функция + внешние переменные.
// // «переменная берётся из замыкания». Это означает – из внешнего объекта переменных.

// // Все переменные и параметры функций являются свойствами объекта переменных LexicalEnvironment.
// // Каждый запуск функции создает новый такой объект. На верхнем уровне им является «глобальный объект», в браузере – window.
// // При создании функция получает системное свойство [[Scope]], которое ссылается на LexicalEnvironment, в котором она была создана.
// // При вызове функции, куда бы её ни передали в коде – она будет искать переменные сначала у себя, а затем во внешних LexicalEnvironment с места своего «рождения».


// // Practices

// say('John'); // Что выведет? Не будет ли ошибки?

// var phrase = 'Hello';

// function say(name) {
//     alert(phrase + " " + name);
// }

// say('John');

// // Переменная как таковая существует, вот только на момент запуска функции она равна undefined.

// var value = 0;

function f() {
    alert(value);//0 
    if (1) {
        value = true;
    } else {
        var value = false;
    }

    alert( value );//t 
}
f();


function test() {

    alert(window);//

    var window = 5;

    alert(window);//
}

test();

// With Comment
var a = 5;

(function() {
   alert(a)
})();


// // Локальная переменная полностью перекрывает внешнюю.

// function makeCounter() {
//     var currentCount = 1;

//     return function() {
//         var currentCount;
//         console.log(currentCount); 
//     };
// }

// makeCounter()();

// function makeCounter() {
//     var currentCount = 1;

//     return (function() {
//         var currentCount;
//         console.log(currentCount); // можно 
//     })();
// }

// makeCounter();



var currentCount = 1;

function makeCounter() {
    return function() {
        return currentCount++;
    };
}
// 
var counter = makeCounter();
var counter2 = makeCounter();
// //
alert( counter() ); //
alert( counter() );// 

alert( counter2() );//
alert( counter2() );//

alert(currentCount);// 
/****** Замыкания ******/
