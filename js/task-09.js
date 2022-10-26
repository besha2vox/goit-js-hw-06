function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

const handleChangeColorClick = () => {
  const color = getRandomHexColor();
  textRef.textContent = color;
  document.body.style.backgroundColor = color;
};

btnRef.addEventListener('click', handleChangeColorClick);
