const loginFormRef = document.querySelector('.login-form');

const handleloginFormSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Усі поля мають бути заповнені');
  }

  const logginData = {};
  for (const key of new FormData(event.currentTarget).keys()) {
    logginData[key] = key;
  }
  console.log(logginData);
  event.currentTarget.reset();
};

loginFormRef.addEventListener('submit', handleloginFormSubmit);
