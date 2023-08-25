//form và chuyển form
const loginChange = document.querySelector(".form-heading-btn.login");
const registerChange = document.querySelector(".form-heading-btn.register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");

// dom cho form login
const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
const emailWarningLogin = document.querySelector(".email-login-warning");
const passwordWarningLogin = document.querySelector(".password-login-warning");

const btnLogin = document.querySelector(".form-login .btn-login");
const loginStatus = document.querySelector(".login-status");

//dom cho form register
const nameRegister = document.querySelector(".name-register");
const emailRegister = document.querySelector(".email-register");
const passwordRegister = document.querySelector(".password-register");
const nameWarningRegister = document.querySelector(".name-register-warning");
const emailWarningRegister = document.querySelector(".email-register-warning");
const passwordWarningRegister = document.querySelector(
  ".password-register-warning"
);

// sự kiện chuyển form
registerChange.addEventListener("click", function () {
  registerChange.classList.add("form-heading-btn--active");
  loginChange.classList.remove("form-heading-btn--active");
  formRegister.style = "display: block";
  formLogin.style = "display: none";
  //reset khi chuyển form
  formRegister.reset();
});
loginChange.addEventListener("click", function () {
  registerChange.classList.remove("form-heading-btn--active");
  loginChange.classList.add("form-heading-btn--active");
  formRegister.style = "display: none";
  formLogin.style = "display: block";
  //reset khi chuyển form
  formLogin.reset();
  emailWarningLogin.innerHTML = "";
  passwordWarningLogin.innerHTML = "";
  loginStatus.innerHTML = "";
  emailLogin.classList.remove("warning-input");
  passwordLogin.classList.remove("warning-input");
});

//su kien ben form login
const showWarningLogin = function () {
  let emailFlag = false;
  let passwordFlag = false;

  if (emailLogin.value === "") {
    emailLogin.classList.add("warning-input");
    emailWarningLogin.innerText = "vui lòng nhập thông tin";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailLogin.value)) {
    emailWarningLogin.innerText = "Vui lòng nhập đúng định dạng email";
  } else {
    emailLogin.classList.remove("warning-input");
    emailWarningLogin.innerText = "";
    emailFlag = true;
  }

  if (passwordLogin.value === "") {
    passwordLogin.classList.add("warning-input");
    passwordWarningLogin.innerText = "vui lòng nhập thông tin";
  } else {
    passwordLogin.classList.remove("warning-input");
    passwordWarningLogin.innerText = "";
    passwordFlag = true;
  }
  return emailFlag && passwordFlag;
};

emailLogin.addEventListener("blur", showWarningLogin);
passwordLogin.addEventListener("blur", showWarningLogin);
emailLogin.addEventListener("keyup", showWarningLogin);
passwordLogin.addEventListener("keyup", showWarningLogin);
btnLogin.addEventListener("click", showWarningLogin);
btnLogin.addEventListener("click", function () {
  let flag = showWarningLogin();
  console.log(flag);
  if (flag) {
    loginStatus.innerText = "Account not existed";
  } else {
    loginStatus.innerHTML = "";
  }
});

//sự kiện bên form register
const showWarningRegister = function () {
  if ((nameRegister.value = "")) {
    nameWarningRegister.innerText = "Vui lòng nhập thông tin";
    emailWarningRegister.innerText = "Vui lòng nhập thông tin";
    passwordWarningLogin.innerText = "Vui lòng nhập thông tin";
  }
};

nameRegister.addEventListener("blur", showWarningRegister);
