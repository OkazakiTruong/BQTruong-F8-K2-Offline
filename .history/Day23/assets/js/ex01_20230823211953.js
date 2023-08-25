const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");

const showWarning = function () {
  emailLogin.value === ""
    ? (emailLogin.style = "outline: 1px solid red")
    : (emailLogin.style = "outline: none");
  passwordLogin.value === ""
    ? (passwordLogin.style = "outline: 1px solid red")
    : (passwordLogin.style = "outline: none");
};
emailLogin.addEventListener("blur", showWarning);
passwordLogin.addEventListener("blur", showWarning);

emailLogin.addEventListener("keyup", showWarning);
passwordLogin.addEventListener("keyup", showWarning);
