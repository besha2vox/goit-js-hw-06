const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const changeName = event => {
  nameOutputRef.textContent =
    nameInputRef.value.length !== 0 ? event.currentTarget.value : 'Anonymous';
};

nameInputRef.addEventListener('input', changeName);
