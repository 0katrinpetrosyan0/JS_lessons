'use strict';

/************ Hamematutyan ev tramabanakan operatorner ****************/

// alert(2 > 1);  //t
// alert(2 < 1); //f
// alert(2 >= 1); //t
// alert(2 <= 1); //f
// alert(2 == 1); //f
// alert(2 != 1); //t
// alert(1 == 1); //t
// alert(2 == '2'); //t


// Логические значения можно использовать и напрямую, присваивать переменным
// var a = true;
// var b = 3 > 4;
// alert(b);
// alert(a == b);

// Сравнение данных полученных от пользователя
// Сравниваются как строки, потому и первый символ первой строки больше чем первый символ второй строки
// alert("1" > "14");//f
// alert(+"2" > "14");//f
// alert("2" > +"14");//f


// Сравнение строк
// var a = "A";
// var b = "a";
// alert(a > b); // A > a == false
// alert(a < b); // A < a == true


// var unicodStr1 = "ABC";
// var number1 = unicodStr1.charCodeAt(0);
// var number2 = unicodStr1.charCodeAt(1);
// var number3 = unicodStr1.charCodeAt(2);
// document.write(number1 +' '+ number2 +' '+ number3);


// var unicodStr1 = "ABC";
// var unicodStr2 = "abc";
// alert(unicodStr1 > unicodStr2);

// document.write("<p>Заглавные буквы</p>");
// document.write("A - " + unicodStr1.charCodeAt(0) + "<br>");
// document.write("B - " + unicodStr1.charCodeAt(1) + "<br>");
// document.write("C - " + unicodStr1.charCodeAt(2) + "<br>");
// document.write("<p>Строчные буквы</p>");
// document.write("a - " + unicodStr2.charCodeAt(0) + "<br>");
// document.write("b - " + unicodStr2.charCodeAt(1) + "<br>");
// document.write("c - " + unicodStr2.charCodeAt(2) + "<br>");

// 0 больше чем отсутствия буквы
// alert("Hello" > "Hell"); //
// alert("Hello" < "Hell"); //
// alert("Hello" == "Hell"); // 

// Преобразование из кода в символ
// var uniStr = String.fromCharCode(65,66,67,1414);
// document.write(uniStr);

// Сравнение разных типов (происходит числовое преобразование)
// alert( '2' > 1 ); //
// alert( '01' == 1 ); //
// alert( false == 0 ); //
// alert( true == 1 ); // 

// Строгое равенство (===)
// alert(0 == false);
// alert('' == false);
// alert(0 === false);
// alert('' === false);
// alert("1" === 1);
// alert(1 === 1);


// null & undefined ( равны друг другу и не равны больше ничему )
// alert(null == undefined); // 
// alert(null === undefined); // 
// alert(+null); // 0
// alert(+undefined); // NaN


// Преобразование из строки в число
// var str = "2017";
// alert(typeof str);
// var newStr = Number(str);
// alert(typeof newStr);



/*********** LESSON **********/



// alert() выводит на экран окно с сообщением и приостанавливает
// выполнение скрипта, пока пользователь не нажмёт «ОК».
// alert("\"Hello World !!!\"");



// prompt() принимает 2 аргумента, вопрос в виде заголовка и значение
// по умолчанию в строке ввода, возвращает введенную строку или NULL,
// если ввод отменен...
// var result = prompt('How Old Are You ?', '');
// document.write(result);
// var age = prompt('How Old Are You ?', '');
// var name = prompt('What Is Your Name ?', '');
// document.write(age +' <br>' + name);



// Если поля пустые выведет пустую строку
// Если нажаты (Отмена, Esc, x) то возвращается NULL
// var userAge = prompt("Сколько Вам лет", 100);
// var userName = prompt("Укажите Ваше имя", "Jon");
// document.write("Ваше имя <b>" + userName + "</b>, Вам <b>" + userAge + "</b> года");
// Всегда указывайте второй аргумент, хотя бы пустую строку ( "" )

// confirm(), return TRUE or FALSE
// Синтаксис:

// var result;
// // 
// var answer = confirm("Вы согласны ?");
// // alert(answer);
// if(answer === true) {
//     result = 'Yes';
// } else {
//     result = 'Cancel';
// }

// document.write(result);

// firstName, lastName, number


// Пример
// var firstName = prompt("Your first name", 'Jon');
// var lastName = prompt("Your last name", 'Lennon');
// var age = prompt("Your age", 40);
// var city = prompt("Your city", "Liverpool");
// var number = prompt("Your phone number", "+374 41 999999");
// document.write("First Name: <b>" + firstName + "</b><br>");
// document.write("Last Name: <b>" + lastName + "</b><br>");
// document.write("Age: <b>" + age + "</b><br>");
// document.write("City: <b>" + city + "</b><br>");
// document.write("Number: <b>" + number + "</b><br>");

/**
 * Иногда, в зависимости от условия, нужно выполнить различные действия.
 * Для этого используется оператор if.
 */
// var scriptLanguage = prompt("Самый популярный скриптовый язык во front-end - е", "");
// if (scriptLanguage === "javascript"){
//     alert("Ok !!!");
// }

// Если нужно выполнить более одной команды – они оформляются блоком кода в фигурных скобках:
// var scriptLanguage = prompt("Самый популярный скриптовый язык во front-end - е", "");
// if (scriptLanguage === "javascript") {
//     alert("Все верно !!!");
//     alert("Самый популярный скриптовый язык во front-end - е: JavaScript");
// }


// Рекомендуется использовать фигурные скобки всегда, даже когда команда одна.
// Это улучшает читаемость кода.

// Оператор if (...) вычисляет и преобразует выражение в скобках к логическому типу.
// Число 0, пустая строка "", null и undefined, а также NaN являются false,
// Остальные значения – true.
// Например, такое условие никогда не выполнится:
// if (0) {
//     alert('OK');
// }

// if (1) {
//     alert('OK');
// }

// Можно и просто передать уже готовое логическое значение

// var boolResult = 15 > 5;
// alert(boolResult);
// if (boolResult) {
//     alert('OK');
// }



// else
// var year = prompt('В каком году Армения официально приняля христианство ?', 111);
// if (+year === 301) {
//     alert("Все верно !!!");
// } else {
//     alert("А вот и неправильно!");
// }

// else if
// var year = prompt('В каком году Армения официально приняля христианство ?', 111);
// if (+year === 301) {
//     alert("Все верно !!!");
// } else if(year === null) {
//     alert("Вы отменили вопрос!");
// } else if(year === ''){
//     alert('Empty');
// } else {
//     alert("А вот и неправильно!");
// }


/************************* Ternar operator ? ***************************/
// Оператор вопросительный знак '?' короче и проще.
// Он состоит из трех частей: "условие ? значение1 : значение2"

// var answer = prompt("Your age", 100);
// if (answer < 18) {
//     alert("Вы не достигли совершеннолетия.");
// }else if( +answer === 100) {
//     alert('duq shat mec eq');
// } else {
//     alert("Вы совершеннолетий.");
// }

// (answer < 18) ? alert("Вы не достигли совершеннолетия.") : alert("Вы совершеннолетий.");

// var result = (answer < 5) ?
//     'Привет, малыш!' : (answer < 18) ?
//         'Привет молодой человек!' : (answer < 100) ?
//             'Здравствуйте!' : 'У Вас срок хранения прошло!';
// alert(result);

// Xndir
// Login password-i stugum
var login = prompt("Enter login", "");
if (login === "admin") {
    var pass = prompt("Enter password", "");
    if (+pass === 123456) {
        alert("Welcome !");
    } else if (pass === null) {
        alert("Canceled !");
    } else {
        alert("Incorrect Password !");
    }
} else if (login === null) {
    alert("Canceled !");
} else {
    alert("Incorrect Login !");
}