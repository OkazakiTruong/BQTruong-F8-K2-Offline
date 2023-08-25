const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
emailLogin.addEventListener("blur", function () {
  if (emailLogin.value === "") {
    emailLogin.style = "border: 1px solid red";
    emailLogin.style = "border: 1px solid red";
  }
  passwordLogin.value === ""
    ? (emailLogin.style = "border: 1px solid red")
    : (emailLogin.style = "border 1px solid #ccc");
});

emailLogin.addEventListener("");
