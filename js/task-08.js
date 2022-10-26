const loginFormRef = document.querySelector('.login-form');

const handleloginFormSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Усі поля мають бути заповнені');
  }
  console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
  event.currentTarget.reset();
};

loginFormRef.addEventListener('submit', handleloginFormSubmit);
