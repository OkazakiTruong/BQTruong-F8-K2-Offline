const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
emailLogin.addEventListener("blur", function () {
  emailLogin.value === ""
    ? (emailLogin.style = "outline: 1px solid red")
    : (emailLogin.style = "outline 1px solid #ccc");
  passwordLogin.value === ""
    ? (passwordLogin.style = "border: 1px solid red")
    : (passwordLogin.style = "border 1px solid #ccc");
});

emailLogin.addEventListener("");
