const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const handleChangeFontSizeInput = () => {
  textRef.style.fontSize = `${rangeRef.value}px`;
};

rangeRef.addEventListener('input', handleChangeFontSizeInput);
