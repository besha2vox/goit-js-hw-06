function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const paragrafRef = document.querySelector('.widget p');

const handleChangeColorClick = () => {
  const color = getRandomHexColor();
  spanRef.textContent = color;
  document.body.style.backgroundColor = color;
  // add color inversion for text
  paragrafRef.style.color = color;
  paragrafRef.style.filter = 'invert(1)';
};

btnRef.addEventListener('click', handleChangeColorClick);
