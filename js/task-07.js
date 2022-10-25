const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.log(rangeRef.value);
const changeFontSize = () => {
  textRef.style.fontSize = `${rangeRef.value}px`;
};

rangeRef.addEventListener('input', changeFontSize);
