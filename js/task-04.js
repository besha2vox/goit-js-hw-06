let counterValue = 0;

const decrementRef = document.querySelector('[data-action="decrement"]');
console.table('decrementRef', decrementRef);
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

const decrementValue = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};
const incrementValue = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

decrementRef.addEventListener('click', decrementValue);
incrementRef.addEventListener('click', incrementValue);
