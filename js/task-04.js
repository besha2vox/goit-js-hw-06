let counterValue = 0;

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

const handleDecrementValueClick = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const handleIncrementValueClick = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementRef.addEventListener('click', handleDecrementValueClick);
incrementRef.addEventListener('click', handleIncrementValueClick);
