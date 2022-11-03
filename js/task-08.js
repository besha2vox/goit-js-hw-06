const loginFormRef = document.querySelector('.login-form');

function onLoginFormSubmit(e) {
  e.preventDefault();
  isFormEmpty(e.currentTarget);
  loggDataForm(e.currentTarget);
  e.currentTarget.reset();
}

function isFormEmpty(props) {
  const {
    elements: { email, password },
  } = props;

  if (email.value === '' || password.value === '') {
    return alert('Усі поля мають бути заповнені');
  }
}

function loggDataForm(props) {
  const logginData = {};
  const formData = new FormData(props);

  formData.forEach((value, key) => {
    logginData[key] = value;
  });

  console.log(logginData);
}

loginFormRef.addEventListener('submit', onLoginFormSubmit);
