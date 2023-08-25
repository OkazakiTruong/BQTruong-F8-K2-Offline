const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
emailLogin.addEventListener("blur", function () {
  emailLogin.value === ""
    ? (emailLogin.style = "outline: 1px solid red")
    : (emailLogin.style = "outline: none");
  passwordLogin.value === ""
    ? (passwordLogin.style = "outline: 1px solid red")
    : (passwordLogin.style = "outline: none");
});

const showWarning = function () {
  emailLogin.value === ""
    ? (emailLogin.style = "outline: 1px solid red")
    : (emailLogin.style = "outline: 1px solid #ccc");
  passwordLogin.value === ""
    ? (passwordLogin.style = "outline: 1px solid red")
    : (passwordLogin.style = "outline: 1px solid #ccc");
};
emailLogin.addEventListener("");
