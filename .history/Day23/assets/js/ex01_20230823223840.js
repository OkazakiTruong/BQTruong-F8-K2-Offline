const loginChange = document.querySelector(".form-heading-btn.login");
const registerChange = document.querySelector("register");
const formLogin = document.querySelector("form-login");
const formRegister = document.querySelector("form-register");

const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
const emailWarningLogin = document.querySelector(".email-login-warning");
const passwordWarningLogin = document.querySelector(".password-login-warning");

registerChange.addEventListener("click", function () {
  formRegister.style = "display: block";
  alert("hello");
});

const showWarningLogin = function () {
  if (emailLogin.value === "") {
    emailLogin.style = "outline: 1px solid red";
    emailWarningLogin.innerText = "vui lòng nhập thông tin";
  } else {
    emailLogin.style = "outline: none";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailLogin.value)) {
      emailWarningLogin.innerText = "Vui lòng nhập đúng định dạng email";
    } else {
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
