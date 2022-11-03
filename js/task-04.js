let counterValue = 0;

const refs = {
  counter: document.querySelector('#counter'),
  value: counter.querySelector('#value'),
};

refs.counter.addEventListener('click', onCounterClick);

function onCounterClick(e) {
  if (e.target.dataset.action === 'decrement') {
    onDecrementClick();
  }
  if (e.target.dataset.action === 'increment') {
    onIncrementClick();
  }
  render();
}

function onIncrementClick() {
  counterValue += 1;
}

function onDecrementClick() {
  counterValue -= 1;
}

function render() {
  refs.value.textContent = counterValue;
}

render();
