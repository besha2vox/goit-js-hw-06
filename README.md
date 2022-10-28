# goit-js-hw-06

<h1>Критерии приема</h1>
<ul>
  <li>Создан репозиторий goit-js-hw-06. </li>
  <li>При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages. </li>
  <li>Задания выполнены строго по ТЗ (нельзя изменять исходный HTML задания). </li>
  <li>При посещении живой страницы задания, в консоли нету ошибок и предупреждений.</li>
  <li>Имена переменных и функций понятные, описательные.</li>
  <li>Код отформатирован Prettier.</li>
  <li>Скачай стартовые файлы с готовой разметкой и подключенными файлами скриптов для каждого задания. Скопируй их себе в проект.</li>
</ul>

#

<h2>Задание 1</h2>
В HTML есть список категорий ul#categories.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

<p>Напиши скрипт который:</p>

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов `li.item`. Для
каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в консоль текст заголовка
элемента (тега `<h1>`) и количество элементов в категории (всех вложенных в него `<li>`). В
результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals Elements: 4

Category: Products Elements: 3

Category: Technologies Elements: 5

#

<h2>Задание 2</h2>
В HTML есть пустой список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

В JavaScript есть массив строк.

```js
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
```

Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент `<li>`. Обзательно используй метод document.createElement(). Добавит
название ингредиента как его текстовое содержимое. Добавит элементу класс item. После чего вставит
все `<li>`; за одну операцию в список ul#ingredients.

#

<h2>Задание 3</h2>
Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

```html
<ul class="gallery"></ul>
```

Используй массив объектов images для создания элементов `<img>` вложенных в `<li>`. Для создания
разметки используй шаблонные строки и метод insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки. Добавь минимальное
оформление галереи флексбоксами или гридами через CSS классы.

```js
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

#

<h2>Задание 4</h2>
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

```html
<div id="counter">
  ` `<button type="button" data-action="decrement">-1</button> <span id="value">0</span>` `<button
    type="button"
    data-action="increment"
  >
    +1</button
  >` `
</div>
```

Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй
её значением 0. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение
счтетчика. Обновляй интерфейс новым значением переменной counterValue.

<h2>Задание 5</h2>
Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие input), подставляет его текущее значение в `span#name-output`. Если инпут пустой, в спане должна отображаться строка "Anonymous".

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

#

<h2>Задание 6</h2>
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

```html
<input type="text" id="validation-input" data-length="6" placeholder="Please enter 6 symbols" />
```

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length. Если введено
подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные
файлы задания.

`#validation-input { border: 3px solid #bdbdbd;}`

`#validation-input.valid { border-color: #4caf50;}`

`#validation-input.invalid { border-color: #f44336; }`

#

<h2>Задание 7</h2>
Напиши скрипт, который реагирует на изменение значения `input#font-size-control` (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство `font-size`. В результате при перетаскивании ползунка будет меняться размер текста.

```html
<input id="font-size-control" type="range" min="16" max="96" /> <br />
<span id="text">Abracadabra!</span>
```

<h2>Задание 8</h2>
Напиши скрипт управления формой логина.

```html
<form class="login-form">
  <label> Email <input type="email" name="email" /> </label>
  <label> Password <input type="password" name="password" /> </label>
  <button type="submit">Login</button>
</form>
```

Обработка отправки формы f`orm.login-form` должна быть по событию submit. При отправке формы
страница не должна перезагружаться. Если в форме есть незаполненные поля, выводи alert с
предупреждением о том, что все поля должны быть заполнены. Если пользователь заполнил все поля и
отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение
поля - значением свойства. Для доступа к элементам формы используй свойство elements. Выведи обьект
с введенными данными в консоль и очисти значения полей формы методом reset.

#

<h2>Задание 9</h2>
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Для генерации случайного цвета используй функцию getRandomHexColor.

```js
function getRandomHexColor() { return `#${Math.floor(Math.random() \* 16777215) .toString(16)
.padStart(6, 0)}`; }
```

#

<h2>Задание 10</h2> (выполнять не обязательно)
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>
<div id="boxes"></div>
```

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько
`<div>`, сколько указано в amount и добавляет их в `div#boxes`.

Размеры самого первого `<div>` - 30px на 30px. Каждый элемент после первого, должен быть шире и выше
предыдущего на 10px. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую
функцию getRandomHexColor для получения цвета.

```js
function getRandomHexColor() { return `#${Math.floor(Math.random() \* 16777215) .toString(16)
.padStart(6, 0)}`; }
```

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные
элементы.
