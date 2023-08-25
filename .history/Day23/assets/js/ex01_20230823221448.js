const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
const emailWarningLogin = document.querySelector(".email-login-warning");
const passwordWarningLogin = document.querySelector(
  ".password-login" - warning
);

const showWarning = function () {
  if (emailLogin.value === "") {
    emailLogin.style = "outline: 1px solid red";
    emailWarningLogin.innerText = "vui lòng nhập thông tin";
  } else {
    emailLogin.style = "outline: none";
    emailWarningLogin.innerText = "";
  }
  if (passwordLogin.value === "") {
    passwordLogin.style = "outline: 1px solid red";
    passwordLogin.innerText = "vui lòng nhập thông tin";
  } else {
    passwordLogin.style = "outline: none";
    passwordLogin.innerText = "";
  }
};
emailLogin.addEventListener("blur", showWarning);
passwordLogin.addEventListener("blur", showWarning);
emailLogin.addEventListener("keyup", showWarning);
passwordLogin.addEventListener("keyup", showWarning);
