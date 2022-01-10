/****** Constructor ******/

// // Конструктором становится любая функция, вызванная через new.

// // Создаётся новый пустой объект.
// // Ключевое слово this получает ссылку на этот объект.
// // Функция выполняется. Как правило, она модифицирует this (т.е. этот новый объект), добавляет методы, свойства.
// // Возвращается this.

// function Animal(name) {
//     this.name = name;
//     this.canWalk = true;
//     console.log(this);
// }
// //
// // //
// let animal = new Animal("dog");
//  console.log(animal);


// // первая и последняя строка – это то, что делает интерпретатор.

// function Animal(name) {
//     // this = {};
//
//     // в this пишем свойства, методы
//     this.name = name;
//     this.canWalk = true;
//
//     // return this;
// }

// // при вызове new без аргументов скобки можно не ставить.

// let animal = new BigAnimal; // <-- без скобок
// // то же самое что
// let animal = new BigAnimal();

//
// function User(name) {
//     this.name = name;
//
//     this.sayHi = function() {
//         alert( "My Name Is: " + this.name);
//     };
// }

// let obj = new User("John");
// //
// obj.sayHi(); // My Name Is: john

//
// console.log(obj);

// // конструкторы ничего не возвращают. Их задача – записать всё, что нужно, в this,
// // который автоматически станет результатом.

// // При вызове return с объектом, будет возвращён он, а не this.
// // При вызове return с примитивным значением, оно будет отброшено.

// function BigAnimal() {
//     this.name = "Мышь";
//     return { name: "Годзилла", age: 10 };  // <-- возвратим объект
// }
// //
// let obj  = new BigAnimal();
// console.log(obj);
// alert( obj.name );  // Годзилла, получили объект вместо this


// function BigAnimal() {
//
//     this.name = "Мышь";
//
//     return "Годзилла"; // <-- возвратим примитив
// }
//
// alert( new BigAnimal().name ); // Мышь, получили this (а Годзилла пропал)


// // В функции-конструкторе бывает удобно объявить вспомогательные локальные переменные и вложенные функции,
// // которые будут видны только внутри.

// function User(firstName, lastName) {
//     // вспомогательная переменная
//     let phrase = "Hello";
//
//     //  вспомогательная вложенная функция
//     function getFullName() {
//         return firstName + " " + lastName;
//     }
//
//     this.sayHi = function() {
//         alert(phrase + " " + getFullName()); // использование
//     };
// }
// //
// // //
// let obj = new User("John", "Lennon");
// obj.sayHi(); // Hello John Lennon
// console.log(obj);


// // Practices

// // Напишите функцию-конструктор Calculator, которая создает объект с тремя методами.

// // Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// // Метод sum() возвращает сумму запомненных свойств.
// // Метод mul() возвращает произведение запомненных свойств.

// function Calculator() {
//
//     this.read = function () {
//         this.first = +prompt('Enter First Number','');
//         this.second = +prompt('Enter Second Number','');
//     };
//
//     this.sum = function () {
//         return this.first + this.second;
//     };
//
//     this.mul = function () {
//         return this.first * this.second;
//     }
// }
// // //
// let calc = new Calculator();
// // console.log(calc);
// calc.read();
// console.log(calc);
// // //
// // //
// alert("Num = " + calc.sum());
// alert("Multiple = " + calc.mul());


// // Напишите функцию-конструктор Accumulator(startingValue).
// // Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt('Enter Number','');
//     }
// }
// //
// let accumulator = new Accumulator(10);
// console.log(accumulator);
// accumulator.read();
// console.log(accumulator);
// // accumulator.read();
// // accumulator.read();
// alert(accumulator.value);

/****** Constructor ******/


/****** Class ******/

// // class – удобный «синтаксический сахар» для задания конструктора вместе с прототипом.

// class Название [extends Родитель]  {
//     constructor
//     методы
// }


// class User {
//
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayHi() {
//         alert(this.name);
//     }
//
//
// }
//
// // // //
// let user = new User("John");
// console.log(user);
//
// // // // // console.log(user.name);
// user.sayHi(); // John


// // Функция constructor запускается при создании new User, остальные методы записываются в User.prototype.
// // Это объявление примерно аналогично такому.

// function User(name) {
//     this.name = name;
// }
//
// User.prototype.sayHi = function() {
//     alert(this.name);
// };


// // В обоих случаях new User будет создавать объекты. Метод sayHi также в обоих случаях находится в прототипе.
// // Но при объявлении через class есть и ряд отличий.


// // 1. User нельзя вызывать без new, будет ошибка.
// // 2. Объявление класса с точки зрения области видимости ведёт себя как let.
// // В частности, оно видно только в текущем блоке и только в коде, который находится ниже объявления
// // (Function Declaration видно и до объявления).

// // Методы, объявленные внутри class, также имеют ряд особенностей:

// // 1. Метод sayHi является именно методом, то есть имеет доступ к super.
// // 2. Все методы класса работают в строгом режиме use strict, даже если он не указан.
// // 3. Все методы класса не перечислимы. То есть в цикле for..in по объекту их не будет.


// // Class Expression.

// let User = class {
//     sayHi() {
//         alert('Hello!');
//     }
// };
//
// new User().sayHi();


// // имя можно дать. Тогда оно, как и в Named Function Expression, будет доступно только внутри класса:

// // let SiteGuest = class User {
// //     sayHi() {
// //         alert('Hello!');
// //     }
// // };
//
// new SiteGuest().sayHi(); // Hello!
// // new User(); // ошибка



// // getter, setter



// // Синтаксис get связывает свойство объекта с функцией, которая будет вызываться при обращении к этому свойству.
// // Оператор set связывает свойство объекта с функцией, которая будет вызвана при попытке установить это свойство.

// let user = {
//     firstName: "John",
//     surname: "Lennon",
//
//     get fullName() {
//         return this.firstName + ' ' + this.surname;
//     },
//
//     set fullName(value) {
//         let split = value.split(' ');
//         this.firstName = split[0];
//         this.surname = split[1];
//     }
// };
// //
// // alert(user.fullName); // John Lennon (из геттера)
// //
// user.fullName = "Ray Charles";
// alert(user.fullName);
// alert( user.firstName ); // Ray  (поставил сеттер)
// // alert( user.surname ); // Charles (поставил сеттер)



// // основной бонус – это гибкость, возможность получить контроль над свойством в любой момент!
// // Например, в начале разработки мы используем обычные свойства, например у User будет имя name и возраст age.

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let pete = new User("John", 40);
// console.log(pete);
// //
// alert( pete.name ); // John
// alert( pete.age ); // 40

// // С обычными свойствами в коде меньше букв, они удобны, причины использовать функции пока нет.
// // Но рано или поздно могут произойти изменения.
// // Например, в User может стать более целесообразно вместо возраста age хранить дату рождения birthday.

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
// }
// //
// let pete = new User("Ray", new Date(1930, 8, 23));
// console.log(pete);
// // Что теперь делать со старым кодом, который выводит свойство age?
// // Добавление get-функции age позволяет обойти проблему легко и непринуждённо:

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
//
//     // age будет высчитывать возраст по birthday
//     Object.defineProperty(this, "age", {
//         get: function() {
//             let today = new Date();
//             let yearDelta = today.getFullYear() - this.birthday.getFullYear();
//             return yearDelta;
//         }
//     });
// }
// //
// let pete = new User("Ray", new Date(1930, 8, 23));

// alert( pete.name ); // Ray
// alert( pete.birthday ); // и дата рождения доступна
// alert( pete.age );      // и возраст

// // Заметим, что pete.age снаружи как было свойством, так и осталось.
// // То есть, переписывать внешний код на вызов функции pete.age() не нужно.
// // Таким образом, defineProperty позволяет нам начать с обычных свойств, а в будущем, при необходимости,
// // можно в любой момент заменить их на функции, реализующие более сложную логику.

//
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // геттер
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }   

    // сеттер
    set fullName(newValue) {
        let val = newValue.split(' ');
        let first = val[0].charAt(0).toLowerCase() + val[0].slice(1);
        let second = val[1].charAt(0).toLowerCase() + val[1].slice(1);

        this.firstName = first;
        this.lastName = second;
    }
}
// //
// let user = new User("John", "Lennon");
// // alert( user.fullName ); // John Lennon
// user.fullName = "Pol Mccartney";
// alert( user.fullName ); // pol mccartney


// // Наследование. (extends)


class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        alert("I walk: " + this.name);
    }
}
// // //
class Rabbit extends Animal {
    walk() {
        super.walk();       // Ключевое слово super используется для вызова функций, принадлежащих родителю объекта.
        alert("...and jump!");
    }
}
// //
// new Rabbit("John").walk();
// console.log(new Rabbit('John'));
let anim = new Rabbit('John');
console.log(anim);
anim.walk();

// // Как видим, в new Rabbit доступны как свои методы, так и (через super) методы родителя.
// // Это потому, что при наследовании через extends формируется стандартная цепочка прототипов:
// // методы Rabbit находятся в Rabbit.prototype, методы Animal – в Animal.prototype, и они связаны через __proto__:

// class Animal { }
// class Rabbit extends Animal { }
//
// alert( Rabbit.prototype.__proto__ === Animal.prototype ); // true

// // Конструктор constructor родителя наследуется автоматически.
// // То есть, если в потомке не указан свой constructor, то используется родительский.
// // Если же у потомка свой constructor, то, чтобы в нём вызвать конструктор родителя – используется синтаксис super()
// // с аргументами для родителя.


class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        alert("I walk: " + this.name);
    }
}
//
class Rabbit extends Animal {
    constructor() {
        // вызвать конструктор Animal с аргументом "John"
        super("John");

    }
}
//
new Rabbit().walk(); // I walk: John


// // Вызвать конструктор родителя можно только изнутри конструктора потомка.
// // В частности, super() нельзя вызвать из произвольного метода.

// // В конструкторе потомка мы обязаны вызвать super() до обращения к this.
// // До вызова super не существует this, так как по спецификации в этом случае именно super инициализирует this.

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor() {
        // alert(this); // ошибка, this не определён!
        // обязаны вызвать super() до обращения к this
        super();

        // alert(this)
        // а вот здесь уже можно использовать this
    }
}

new Rabbit();

/****** Class ******/