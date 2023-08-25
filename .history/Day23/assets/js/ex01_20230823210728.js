const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
emailLogin.addEventListener("focusout", function () {
  if (emailLogin.value === "") {
    emailLogin.style = "border: 1px solid red";
    passwordLogin.style = "border: 1px solid red";
  }
});

emailLogin.addEventListener("");
