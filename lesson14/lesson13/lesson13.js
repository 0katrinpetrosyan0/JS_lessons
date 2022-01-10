"use strict";

// function countPhone() {
//     for (var i = 0; i < 3; i++) {
//         alert("Phone number: " + i);
//     }
// }

// createElement(tag) - содаем новый тег DIV
// var div = document.createElement('div');
// console.log(div);

// createTextNode(text) - создает новый текстовый узел с данным текстом
// var textElem = document.createTextNode('JavaScript message');

// appendChild(elem) - добавляет elem в конец дочерних элементов.
// var newLi = document.createElement('li');
// var parentElement = document.getElementById('list');
// newLi.innerHTML = 'JavaScript';
// parentElement.append(newLi);

// Работаем со значением полученным из формы
// document.getElementById('numForm').onsubmit = function (e) {
//     e.preventDefault();
//     var resultList = document.getElementById('resultList');
//     var inputVal = document.getElementById('num').value;
//     var resultContainer = document.createElement('li');
//     resultContainer.innerHTML = "<b><i class='fa fa-angle-right fa-lg fa-fw' aria-hidden='true'></i> " + inputVal + "</b>";
//     resultList.appendChild(resultContainer);
//     document.getElementById('numForm').reset();
//     // return false;
// };




// insertBefore(elem, nextSibling) - Вставляет elem в коллекцию детей, перед элементом nextSibling.
// var resultList = document.getElementById('list');
// var resultLi = document.createElement('li');
// resultLi.innerHTML = '1';
// console.log(resultList.lastChild);
// resultList.prepend(resultLi);
// resultList.insertBefore(resultLi, resultList.children[1]);
// resultList.insertBefore(resultLi, resultList.firstChild);
// resultList.insertBefore(resultLi, resultList.lastChild);
// // Все методы вставки возвращают вставленный узел.
// var result = resultList.insertBefore(resultLi, null);
// console.log(result);

// Все методы вставки автоматически удаляют вставляемый элемент со старого места.
// Меняем местами
// var first = document.body.children[0];
// var second = document.body.children[1];
// console.log(first);
// console.log(second);
// document.body.insertBefore(second, first);

// Добавим контент в конец или в начало body
// var div = document.createElement('div');
// div.className = 'alert alert-success';
// div.innerHTML = "Welcome to the <b>JavaScript <i class='fa fa-code fa-lg' aria-hidden='true'></i></b> course !!!";
// document.body.appendChild(div);
// // console.log(document.body.firstChild);
// //
// document.body.insertBefore(div, document.body.firstChild);

// клонирование элементов
// var messageBlock = document.createElement('div');
// messageBlock.className = 'alert alert-success';
// messageBlock.innerHTML = "Welcome to the <b>JavaScript <i class='fa fa-code fa-lg' aria-hidden='true'></i></b> course !!!";
// document.body.appendChild(messageBlock);
// // // создаем копию
// var messageBlockClone = messageBlock.cloneNode(true);
// // // редактируем копию
// messageBlockClone.querySelector('b').innerHTML = "JQuery <i class='fa fa-code fa-lg' aria-hidden='true'></i>";
// // // вставляем на страницу
// document.body.appendChild(messageBlockClone);
// document.body.insertBefore(messageBlockClone, document.body.firstChild);

// удаление элемента
// document.getElementById('delete').onclick = function () {
//     var parent = document.getElementById('img-block');
//     var img = document.getElementById('sport');
//     parent.removeChild(img);
// };
// document.getElementById('delete').onclick = function () {
//     var newImg = document.createElement('div');
//     newImg.innerHTML = '<img src="http://lorempixel.com/400/200/food/" id="food" alt="Food">';
//     var parent = document.getElementById('img-block');
//     var oldImg = document.getElementById('sport');
//     parent.replaceChild(newImg, oldImg);
// };
// document.getElementById('delete').onclick = function () {
//     document.getElementById('img-block').remove();
// };
// удаление через заданное время


// function myFunc() {
//     var div = document.createElement('div');
//     div.className = 'alert alert-success';
//     div.innerHTML = '<b>Добро пожаловать на сайт !!!</b> <i>Сообщение скроется через 3 секунды.</i>';
//     document.body.appendChild(div);
//     setTimeout(function () {
//         div.remove();
//     }, 3000);
// }
// setTimeout(myFunc, 3000);




// Если нужно вставить просто текст можно использовать createTextNode(text)
// var div = document.createElement('div');
// div.className = "alert alert-success";
// document.body.appendChild(div);
// var text = prompt("Введите текст для сообщения", "Message!");
// div.appendChild(document.createTextNode(text));

/**
 * Добавление множества узлов
 * insertAdjacentHTML позволяет вставлять произвольный HTML в любое место документа,
 * в том числе и между узлами!
 */
// var ul = document.body.children[0];
// var li5 = ul.children[2];
// li5.insertAdjacentHTML('beforeBegin', '<li>3</li><li>4</li>');

// append(), prepend(), after(), before(), replaceWith()
// var newP = document.createElement('p');
// newP.innerHTML = 'New text';
// var parentBlock = document.getElementById('text-block');
// parentBlock.prepend(newP);
// parentBlock.before(newP);
// parentBlock.append(newP);
// parentBlock.after(newP);
// parentBlock.replaceWith(newP);


/* Style */
// document.body.style.backgroundColor = 'coral';
// document.body.style.margin = '40px';

// var myBtn = document.getElementById('btn');
// myBtn.style.cssText = "\
//     outline: none; \
//     background-color: coral; \
//     border: 1px solid coral; \
//     padding: 5px 15px; \
//     color: #fff; \
//     width: 100px; \
//     text-align: center; \
//     ";

// Стили из каскадных таблиц стилей так получить нельзя
// console.log(document.body.style.color);
// Стили из аттрибута получить можно
// console.log(document.body.style.height);
// Для получения текущего используемого значения свойства, используется метод window.getComputedStyle
// var blueBtn = document.getElementById('blue-btn');
// var blueBtnStyle = getComputedStyle(blueBtn);
// alert(blueBtnStyle.color);
// alert(blueBtnStyle.fontSize);
// alert(blueBtnStyle.padding);
// alert(blueBtnStyle.transition);


/* Размеры и прокрутка элементов */
// var element = document.getElementById('example');
//
// // Свойства offsetLeft/Top задают смещение относительно родителя
// document.write("element.offsetLeft: " + element.offsetLeft + "<br>");
// document.write("element.offsetTop: " + element.offsetTop + "<br>");
// // // Содержат «внешнюю» ширину/высоту элемента
// document.write("element.offsetWidth: " + element.offsetWidth + "<br>");
// document.write("element.offsetHeight: " + element.offsetHeight + "<br>");
//
// document.write("<hr>");
//
// // Аналог clientWidth / clientHeight но добавляется и прокрученная страница
// document.write("element.scrollTop: " + element.scrollTop + "<br>");
// document.write("element.scrollHeight: " + element.scrollHeight + "<br>");
//
// // document.write("<hr>");
//
// // Ширина рамки
// document.write("element.clientTop: " + element.clientTop + "<br>");
// document.write("element.clientLeft: " + element.clientLeft + "<br>");
// // Размер элемента внутри рамок, включают в себя
// // ширину содержимого width вместе с полями padding, но без прокрутки.
// document.write("element.clientWidth: " + element.clientWidth + "<br>");
// document.write("element.clientHeight: " + element.clientHeight + "<br>");
// Чтобы раскрыть элемент
// element.style.height = element.scrollHeight + 'px';


// Ширина/высота видимой части окна
// document.write("Width: " + document.documentElement.clientWidth + "<br>");
// document.write("Height: " + document.documentElement.clientHeight + "<br>");
// Ширина/высота страницы с учётом прокрутки
// document.write("Scroll width: " + document.documentElement.scrollWidth + "<br>");
// document.write("Scroll height: " + document.documentElement.scrollHeight + "<br>");
// Текущая прокрутка страницы
// setInterval(function () {
//     console.log(window.pageYOffset);
//     // console.log('Текущая прокрутка слева: ' + window.pageXOffset);
// }, 1000);
// Пример
// document.onscroll = function () {
//     var menu = document.getElementById('menu');
//     var scrollTop = window.pageYOffset;
//     console.log(scrollTop);
//     if (scrollTop > 100) {
//         menu.classList.add('fix');
//     } else {
//         menu.classList.remove('fix');
//     }
// };
//
// // Прокручивает страницу до указанных кординат
// document.getElementById('scrollLink').onclick = function () {
//     window.scrollTo(0, 556);
//     return false;
// };

// Прокручиваем страницу, чтобы кнопка оказалась:
// document.getElementById('scrollBtn').onclick = function () {
//     this.scrollIntoView(true);
//     this.scrollIntoView(true);
//     this.scrollIntoView(false);
// };

// запрет прокрутки
// document.body.style.overflow = "hidden";


/* Координаты в окне */
// document.getElementById('cordBtn').onclick = function () {
//     var btnCord = this.getBoundingClientRect();
//     console.log(btnCord);
//     document.write(btnCord.top + "<br>");
//     document.write(btnCord.left + "<br>");
//     document.write(btnCord.right + "<br>");
//     document.write(btnCord.bottom + "<br>");
//     document.write(btnCord.bottom - btnCord.top + "<br>");
//     document.write(btnCord.right - btnCord.left + "<br>");
// };


// function hello() {
//     alert('Hello JavaScript !!!');
// }
//
// document.getElementById('btn').onclick = function () {
//     alert('Hello World !!!');
// };
//
// function sayHello() {
//     alert('Hello JavaScript !!!');
// }
// var myBtn = document.getElementById('btn');
// myBtn.onclick = sayHello;
//
// document.getElementById('btn').onclick = function () {
//     alert('Обработчик из JavaScript');
// };

// document.getElementById('circle').onclick = function () {
//     this.classList.add('circle-right');
//     return false;
// };

// function question() {
//     alert('Start ?');
// }
// function start() {
//     this.classList.add('circle-right');
//     // return false;
// }
//
// var circleBtn = document.getElementById('circle');
// circleBtn.onclick = question;
// circleBtn.onclick = start;
//
// circleBtn.addEventListener("click", question);
// circleBtn.addEventListener("click", start);

// Получаем из объекта события разную инфу
// document.getElementById('btn').onclick = function(event) {
//     console.log(event);
//     // вывести тип события, элемент и координаты клика
//     alert(event.type + " на " + event.currentTarget);
//     alert(event.clientX + ":" + event.clientY);
// };

// Делегирование событий
// var selectedTd;
// var table = document.getElementById('myTable');
// table.onclick = function(event) {
//     var target = event.target;
//     if (target.tagName !== 'TD') {
//         return;
//     }
//     bg(target);
// };
// function bg(node) {
//     if (selectedTd) {
//         selectedTd.style.backgroundColor = 'transparent';
//     }
//     selectedTd = node;
//     selectedTd.style.backgroundColor = 'coral';
// }

// Приём проектирования "поведение"
// document.onclick = function(event) {
//     if (event.target.hasAttribute('data-counter')) {
//         event.target.innerHTML++;
//     }
// };


// Псевдомассив form.elements
// document.forms.my -- форма с именем 'my'
// document.forms[0] -- первая форма в документе
// var firstForm = document.forms.login;
// firstForm.elements.login.style.backgroundColor = 'coral';
// var secondForm = document.forms[1];
// secondForm.elements.search.style.backgroundColor = 'blue';

// Любой элемент формы form можно получить аналогичным образом,
// используя свойство form.elements
// document.getElementById('login').onsubmit = function () {
//     alert(this.elements.login.value);
//     alert(this.elements.password.value);
// };


// buble
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}






















document.body.onclick = function (e) {
    console.log(Math.random());
  var newDiv = document.createElement('div');
  newDiv.className = 'buble';
  document.body.appendChild(newDiv);
  var r = randomInteger(0, 255);
  var g = randomInteger(0, 255);
  var b = randomInteger(0, 255);
  newDiv.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
  newDiv.style.left = e.clientX - 50 + 'px';
  newDiv.style.top = e.clientY - 50 + 'px';
};
