const validationInputRef = document.querySelector('#validation-input');

const inputValidation = () => {
  validationInputRef.value.length === Number(validationInputRef.dataset.length)
    ? validationInputRef.classList.add('valid')
    : validationInputRef.classList.add('invalid');
};

validationInputRef.addEventListener('blur', inputValidation);
