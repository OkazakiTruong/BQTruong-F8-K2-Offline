const loginChange = document.querySelector(".form-heading-btn.login");
const registerChange = document.querySelector(".form-heading-btn.register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");

const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
const emailWarningLogin = document.querySelector(".email-login-warning");
const passwordWarningLogin = document.querySelector(".password-login-warning");
const loginStatus = document.querySelector(".loginStatus");

const btnLogin = document.querySelector(".form-login .btn-login");

console.log(registerChange);

registerChange.addEventListener("click", function () {
  registerChange.classList.add("form-heading-btn--active");
  loginChange.classList.remove("form-heading-btn--active");
  formRegister.style = "display: block";
  formLogin.style = "display: none";
  formRegister.reset();
});
loginChange.addEventListener("click", function () {
  registerChange.classList.remove("form-heading-btn--active");
  loginChange.classList.add("form-heading-btn--active");
  formRegister.style = "display: none";
  formLogin.style = "display: block";
  formLogin.reset();
  emailWarningLogin.innerHTML = "";
  passwordWarningLogin.innerHTML = "";
});

const showWarningLogin = function () {
  if (emailLogin.value === "") {
    emailLogin.style = "outline: 1px solid red";
    emailWarningLogin.innerText = "vui lòng nhập thông tin";
  } else {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailLogin.value)) {
      emailWarningLogin.innerText = "Vui lòng nhập đúng định dạng email";
    } else {
      emailLogin.style = "outline: none";
      emailWarningLogin.innerText = "";
    }
  }
  if (passwordLogin.value === "") {
    passwordLogin.style = "outline: 1px solid red";
    passwordWarningLogin.innerText = "vui lòng nhập thông tin";
  } else {
    passwordLogin.style = "outline: none";
    passwordWarningLogin.innerText = "";
  }
};

emailLogin.addEventListener("blur", showWarningLogin);
passwordLogin.addEventListener("blur", showWarningLogin);
emailLogin.addEventListener("keyup", showWarningLogin);
passwordLogin.addEventListener("keyup", showWarningLogin);
btnLogin.addEventListener("click", showWarningLogin);
