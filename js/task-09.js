function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

const changeColor = () => {
  textRef.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

btnRef.addEventListener('click', changeColor);
