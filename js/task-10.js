function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

let size = 0;
const elements = [];

const makeDiv = () => {
  const amountOfElements = Number(inputRef.value);

  for (let i = 0; i < amountOfElements; i += 1) {
    const divBox = document.createElement('div');
    size += size > 0 ? 10 : 30;
    divBox.style.width = `${size}px`;
    divBox.style.height = divBox.style.width;
    divBox.style.backgroundColor = getRandomHexColor();
    elements.push(divBox);
    console.log(`size: ${size}x${size}px\nbgc: ${divBox.style.backgroundColor}`);
  }
  boxesRef.append(...elements);
};

const delDiv = () => {
  boxesRef.innerHTML = '';
  console.clear();
};

createBtnRef.addEventListener('click', makeDiv);
destroyBtnRef.addEventListener('click', delDiv);
