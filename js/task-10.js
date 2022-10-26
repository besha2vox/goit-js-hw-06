function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

let size = 0;
let count = 0;
const elements = [];

const makeElementsClick = () => {
  const amountOfElements = Number(inputRef.value);

  for (let i = 0; i < amountOfElements; i += 1) {
    const divBox = document.createElement('div');

    size += size > 0 ? 10 : 30;

    divBox.style.width = `${size}px`;
    divBox.style.height = divBox.style.width;
    divBox.style.backgroundColor = getRandomHexColor();

    elements.push(divBox);

    console.group(`divBox ${++count}`);
    console.log(`size: ${size}x${size}px\nbgc: ${divBox.style.backgroundColor}`);
    console.groupEnd();
  }

  boxesRef.append(...elements);
};

const removeElementsClick = () => {
  boxesRef.innerHTML = '';
  size = 0;
  count = 0;
  console.clear();
};

createBtnRef.addEventListener('click', makeElementsClick);
destroyBtnRef.addEventListener('click', removeElementsClick);
