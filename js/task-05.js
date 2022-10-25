const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const changeName = event => {
  nameInputRef.value.length !== 0
    ? (nameOutputRef.textContent = event.currentTarget.value)
    : (nameOutputRef.textContent = 'Anonymous');
};

nameInputRef.addEventListener('input', changeName);
