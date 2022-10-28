let counterValue = 0;

const counterRef = document.querySelector('#counter');
const valueRef = counterRef.querySelector('#value');

counterRef.addEventListener('click', onCounterClick);

function onCounterClick(e) {
  if (e.target.dataset.action === 'decrement') {
    counterValue -= 1;
  }
  if (e.target.dataset.action === 'increment') {
    counterValue += 1;
  }

  valueRef.textContent = counterValue;
}
