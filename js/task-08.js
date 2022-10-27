const loginFormRef = document.querySelector('.login-form');

const handleloginFormSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Усі поля мають бути заповнені');
  }
  const logginData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(logginData);
  event.currentTarget.reset();
};

loginFormRef.addEventListener('submit', handleloginFormSubmit);
