const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
const emailWarningLogin = document.querySelector(".email-warning-login");
const passwordWarningLogin = document.querySelector(".password-warning-login");

const showWarning = function () {
  if (emailLogin.value === "") {
    emailLogin.style = "outline: 1px solid red";
  } else {
    emailLogin.style = "outline: none";
  }
  if (passwordLogin.value === "") {
    passwordLogin.style = "outline: 1px solid red";
  } else {
    passwordLogin.style = "outline: none";
  }
};
emailLogin.addEventListener("blur", showWarning);
passwordLogin.addEventListener("blur", showWarning);
emailLogin.addEventListener("keyup", showWarning);
passwordLogin.addEventListener("keyup", showWarning);
