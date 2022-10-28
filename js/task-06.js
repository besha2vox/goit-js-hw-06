const validationInputRef = document.querySelector('#validation-input');
const handleInputValidationBlur = () => {
  if (
    validationInputRef.value.length ===
    Number(validationInputRef.dataset.length)
  ) {
    if (validationInputRef.classList.contains('invalid')) {
      validationInputRef.classList.remove('invalid');
    }
    validationInputRef.classList.add('valid');
  } else {
    if (validationInputRef.classList.contains('valid')) {
      validationInputRef.classList.remove('valid');
    }
    validationInputRef.classList.add('invalid');
  }
};

validationInputRef.addEventListener('blur', handleInputValidationBlur);
