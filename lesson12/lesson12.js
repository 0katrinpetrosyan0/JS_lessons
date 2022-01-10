//"use strict"; // Строгий режим нужно активировать в начале файла

/**
 * Object window
 */
// console.log(window);

// Размеры окна браузера пользователя без панели инструментов и полосы прокрутки
// var w = window.innerWidth;
// var h = window.innerHeight;
// alert(w + " x " + h);

// Размеры браузера
// var w = window.outerWidth;
// var h = window.outerHeight;
// alert(w + " x " + h);

// console.log(document);
//
// document.getElementById('link').onclick = function () {
//     window.open('http://getbootstrap.com/');
// };


/**
 * Object navigator
 * Объект navigator содержит общую информацию о браузере и операционной системе.
 */
// console.log(navigator);
//
// // Определяем браузер пользователя
//
//
// function get_browser_name() {
//     var ua = navigator.userAgent;
//     if (ua.search(/Chrome/) !== -1) return 'Google Chrome';
//     if (ua.search(/Firefox/) !== -1) return 'Firefox';
//     return 'Не определен';
// }
// alert(get_browser_name());


/**
 * Object location
 * Объект location содержит информацию о текущем URL страницы
 * Функции alert/confirm/prompt – тоже входят в BOM.
 */
// console.log(location);
// // // текущий URL
// document.write(location.href);
// // Обновляем страницу
// location.reload();


/**
 * Object screen
 */

// console.log(screen);
// // // // Разрешение экрана пользователя
// // var w = screen.width;
// // var h = screen.height;
// // alert(w + " x " + h);

/**
 * Object document
 */
// console.log(document);
// document.title = "New Title";



// document.getElementById('color').onchange = function () {
//     var bodyColor = document.getElementById('color').value;
//     console.log(bodyColor);
//     document.body.style.backgroundColor = bodyColor;
//     // console.log(this.value);
// };

/**
 * Основным инструментом работы и динамических изменений на странице является DOM (Document Object Model)
 * используемая для HTML-документов.
 * Каждый HTML-тег образует узел дерева с типом «элемент».
 * Вложенные в него теги становятся дочерними узлами.
 * Для представления текста создаются узлы с типом «текст».
 * Теги образуют узлы-элементы (element node).
 * Текст внутри элементов образует текстовые узлы (text node), обозначенные как #text.
 *
 *
 * Дочерние элементы (или дети) – элементы, которые лежат непосредственно внутри данного.
 * Например, внутри <HTML> обычно лежат <HEAD> и <BODY>.
 * Потомки – все элементы, которые лежат внутри данного, вместе с их детьми, детьми их детей и так далее
 */


/* НАВИГАЦИЯ ПО DOM-ЭЛЕМЕНТАМ ********************************************/


// <HTML> = document.documentElement
// document.documentElement.style.height = '50px';
// document.documentElement.style.border = '2px solid coral';
// console.log(document.documentElement);

// <BODY> = document.body
// document.body.style.backgroundColor = 'coral';


// previousSibling & nextSibling

// var span2 = document.getElementById('span2');
// console.log(span2);
// span2.style.color = 'blue';
// console.log(span2.previousElementSibling);
// span2.previousElementSibling.style.color = 'red';
//

// parendNode

// var span1 = document.getElementById('span1');
// console.log(span1.parentNode);
// span1.parentNode.style.backgroundColor = 'blue';
// span1.parentNode.style.color = '#fff';


// Псевдо-массив childNodes хранит все дочерние элементы, включая текстовые.
// Нельзя просто заменить элемент присвоением childNodes[i] = ...
// console.log(document.getElementById('myList').children);
// for (var i = 0; i < document.getElementById('myList').children.length; i++) {
//     console.log(document.getElementById('myList').children[i].style.color = 'red');
// }
// document.getElementById('myList').childNodes[1].style.color = 'red';


// DOM-коллекции, такие как childNodes, не являются JavaScript-массивами.
// В них нет методов массивов, таких как forEach, map, push, pop и других.


/* Навигация только по элементам ***************************************/

// Выбираем дочерние элементы (children) без текстовых узлов

// var parentBlock = document.querySelector('ul.myList').children;
// console.log(parentBlock);
// for (var i = 0; i < parentBlock.length; i++) {
//     parentBlock[i].style.color = 'red';
// }


// firstElementChild, lastElementChild – соответственно, первый и последний дети-элементы.

// var parentBlock = document.querySelector('.myList');
// console.log(parentBlock);
// parentBlock.firstElementChild.style.color = 'coral';
// parentBlock.lastElementChild.style.color = 'blue';


// Точка отсчета

// var baseBlock2 = document.getElementById('base-block2');
//
// // Предыдущий тег
//
// baseBlock2.previousElementSibling.style.color = 'red';
//
// // Следующий тег
// baseBlock2.nextElementSibling.style.color = 'blue';
//
// // Родитель
// baseBlock2.parentElement.style.border = '2px solid red';
// baseBlock2.parentElement.style.width = '100px';
// baseBlock2.parentElement.style.textAlign = 'center';


/* Ищем элемент по ID ****************************************************/
// var content = document.getElementById('content');
// console.log(content);
// content.style.backgroundColor = '#a0350e';
// content.style.color = '#fff';
// console.log(window['base-content']);
// window['base-content'].style.padding = '20px';
// window['base-content'].style.backgroundColor = 'red';


/**
 * существует только в контексте document
 * document.getElementById()
 */
// document.getElementById('name').style.backgroundColor = 'coral';
// document.getElementById('name').style.color = '#fff';


/**
 * getElementsByTagName(tag)
 * ищет все элементы с заданным тегом внутри элемента
 * и возвращает их в виде списка.
 */
// Выбор всех тегов DIV

// let divTags = document.getElementsByTagName('div');
// console.log(divTags);
// let count = 0;
// for (let i = 0; i < divTags.length; i++) {
//     divTags[i].onclick = function (event) {
//         this.style.background = count++ % 2 ? 'red' : 'blue'
//     }
// }


// Поиск в элементе

// var allElements = document.getElementById('element-block');
// // console.log(allElements);
// var elements = allElements.getElementsByTagName('p');
// // console.log(elements);
// for (var i = 0; i < elements.length; i++) {
//     elements[i].style.color = 'red';
// }
//
//
// // Поскольку возвращает коллекцию - можно выбрать так
//
// console.log(document.getElementsByTagName('li')[2].innerHTML);
//
// Или так

// var ul = document.getElementById('my-list');
// console.log(ul.getElementsByTagName('*'));


/**
 * document.getElementsByName(name) используется весьма редко
 * Вызов позволяет получить все элементы с данным атрибутом name.
 */
// var elem = document.getElementsByName('fname');
// console.log(elem);
// for (var i = 0; i < elem.length; i++) {
//     elem[i].style.backgroundColor = "coral";
//     elem[i].style.color = "white";
//     elem[i].style.border = "2px solid coral";
//     elem[i].style.padding = "5px 10px";
// }


/**
 * document.getElementsByClassName(className)
 * возвращает коллекцию элементов с классом className
 * Как и getElementsByTagName, этот метод может быть вызван
 * и в контексте DOM-элемента, и в контексте документа.
 */
// var articles = document.getElementsByClassName('article');
// console.log(articles);
// alert(articles[0].textContent);
// alert(articles[1].textContent);


/**
 * querySelectorAll()
 * Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem,
 * удовлетворяющие CSS-селектору.
 */
// var elements = document.querySelectorAll('ul > li:last-child');
// for (var i = 0; i < elements.length; i++) {
//     alert(elements[i].innerHTML);
// }


/**
 * querySelector()
 * Эффективнее - после первого же совпадения прекращает поиск
 */
// document.querySelector('ul > li:last-child').style.color = 'red';


/**
 * Предыдущие методы искали по DOM.
 * Метод elem.matches(css) ничего не ищет, а проверяет,
 * удовлетворяет ли elem селектору css. Он возвращает true либо false.
 */
// var elems = document.getElementsByTagName('a');

// Всегда проверяем, что получили в результате выборки
// console.log(elems);
//
// for (var i = 0; i < elems.length; i++) {
//     // console.log(elems[i].matches('a[href$=".txt"]'));
//     if (elems[i].matches('a[href$=".txt"]')) {
//         document.write(elems[i].href + '<br>');
//     }
// }


/**
 * Метод elem.closest(css) ищет ближайший элемент выше по иерархии DOM,
 * подходящий под CSS-селектор css. Сам элемент тоже включается в поиск.
 * closest()
 */
// var numberSpan = document.querySelector('.num');
// console.log(numberSpan);
//
// // ближайший элемент сверху подходящий под селектор li
//
// alert(numberSpan.closest('li').className);
//
// // ближайший элемент сверху подходящий под селектор .chapter
//
// alert(numberSpan.closest('.chapter').tagName);
//
// // ближайший элемент сверху, подходящий под селектор span
// // это сам numberSpan, так как поиск включает в себя сам элемент
//
// alert(numberSpan.closest('span') === numberSpan);
// console.log(numberSpan.closest('span'));


/*
Есть 6 основных методов поиска элементов DOM:
Метод                       	        Ищет по...	            Ищет внутри элемента?	        Поддержка
-------------------------------------------------------------------------------------------------------------
getElementById	                    id	                            -	                                                везде
getElementsByName	            name	                    -	                                                везде
getElementsByTagName	    тег или '*'	            ✔	                                                везде
getElementsByClassName	    классу	                    ✔	                                                кроме IE8-
querySelector	                    CSS-селектор	        ✔	                                                везде
querySelectorAll	                CSS-селектор	        ✔	                                                везде
*/


/**
 * console.log выводит элемент в виде, удобном для исследования HTML-структуры.
 * console.dir выводит элемент в виде JavaScript-объекта, удобно для анализа его свойств.
 */
// console.log(document.body);
// console.dir(document.body);


/**
 * tagName содержат название тега
 * Название HTML-тега всегда находится в верхнем регистре.
 */
// alert(document.body.tagName);
// alert(document.querySelector('.chapter').tagName);


/**
 * innerHTML - позволяет получить HTML-содержимое элемента в виде строки
 * В innerHTML можно и читать и писать.
 */
// alert(document.getElementById('hi').innerHTML);
// document.getElementById('hi').innerHTML = '<img src="images/js.jpg">';


/**
 * outerHTML
 * содержит HTML элемента целиком.
 */
// console.log(document.getElementById('text-block-2').innerHTML);
// console.log(document.getElementById('text-block-2').outerHTML);
// console.log(typeof document.getElementById('text-block-2').outerHTML);


/**
 * Несколько свойств
 */
// var input = document.getElementById('city');
// console.dir(input);
// document.write(input.type + "<br>");
// document.write(input.name + "<br>");
// document.write(input.id + "<br>");
// document.write(input.value + "<br>");


/**
 * Получение значения из своего аттрибута
 */
// var elem = document.getElementById('elem');
// alert(elem.id);
// alert(elem.about);

// var elem = document.getElementById('fname').getAttribute('myattr');
// console.log(elem);
// var elem = document.getElementById('fname').setAttribute('myattr', 'kuku');
// console.log(document.getElementById('fname'));

// Стандарт HTML5 специально разрешает атрибуты data-* и
// резервирует их для пользовательских данных.

// var elem = document.getElementById('elem');
// alert(elem.dataset.about);
// alert(elem.dataset.userLocation);


/**
 * Атрибуты и DOM-свойства
 * elem.hasAttribute(name) – проверяет наличие атрибута
 * elem.getAttribute(name) – получает значение атрибута
 * elem.setAttribute(name, value) – устанавливает атрибут
 * elem.removeAttribute(name) – удаляет атрибут
 */


// var element = document.getElementById('myInput');
// if (element.hasAttribute('name')) {
//     alert("Yes");
// } else {
//     alert("No");
// }

// var value = element.getAttribute('value');
// // alert(value);
//
// element.setAttribute('value', 'Yerevan');
//
// element.setAttribute('placeholder', 'Your city...');
//
// element.removeAttribute('value');


/**
 * Классы в виде строки: className
 * Классы в виде объекта: classList
 * elem.classList.contains("class") – возвращает true/false, в зависимости от того, есть ли у элемента класс class.
 * elem.classList.add/remove("class") – добавляет/удаляет класс class
 * elem.classList.toggle("class") – если класса class нет, добавляет его, если есть – удаляет.
 */
// var div = document.getElementById('myBlock');
// div.onclick = function () {
//     var hasClass = div.classList.contains('close');
//     if (hasClass) {
//         div.classList.remove('close');
//         div.classList.add('open');
//     } else {
//         div.classList.remove('open');
//         div.classList.add('close');
//     }
// };

// document.getElementById('myBlock').onclick = function () {
//     // console.log(this);
//     this.classList.toggle('open');
// };

// Navbar

// document.getElementById('nav-btn').onclick = function () {
//     document.getElementById('nav').classList.toggle('open');
// };


/**
 * Date & Time
 */

// Создаем новый объект Date с текущей датой и временем
// var now = new Date();
// alert(now);

// var date = new Date();
// document.write("<br> DATE <br>");
// document.write("Year: <b>" + date.getFullYear() + "</b><br>"); // Получить год (из 4 цифр)
// document.write("Month: <b>" + date.getMonth() + "</b><br>"); // Получить месяц, от 0 до 11.
// document.write("Day month: <b>" + date.getDate() + "</b><br>"); // Получить число месяца, от 1 до 31.
// document.write("Day week: <b>" + date.getDay() + "</b><br>"); // от 0(воскресенье) до 6(суббота).

// document.write("<br> TIME <br>");
// document.write("Hours: <b>" + date.getHours() + "</b><br>"); // Часы
// document.write("Minutes: <b>" + date.getMinutes() + "</b><br>"); // Минуты
// document.write("Seconds: <b>" + date.getSeconds() + "</b><br>"); // Секунды
// document.write("Milliseconds: <b>" + date.getMilliseconds() + "</b><br>"); // Милисекунды


// function currentTime() {
//     var clockBlock = document.getElementById('clock');

//     var date = new Date();

//     var hours = date.getHours();
//     if (hours < 10) {
//         hours = '0' + hours;
//     }
//     var minutes = date.getMinutes();
//     if (minutes < 10) {
//         minutes = '0' + minutes;
//     }
//     var seconds = date.getSeconds();
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }

//     var milliSeconds = date.getMilliseconds();
//     if (milliSeconds < 100) {
//         milliSeconds = '0' + milliSeconds;
//     } else if (milliSeconds < 10) {
//         milliSeconds = '00' + milliSeconds;
//     }

//     clockBlock.innerHTML = hours + " : " + minutes + " : " + seconds + ' : ' + milliSeconds;
// }
// //
// setInterval(currentTime, 1);

