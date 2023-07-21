const autoFocus = () => {
  let firstInputLogin = document.querySelector(
    ".form-login .form-field:nth-of-type(1) input"
  );
  firstInput.focus();
};

autoFocus();

const openLogin = () => {
  let btnLogin = document.getElementById("js-btn-login");
  let btnRegister = document.getElementById("js-btn-register");
  let formLogin = document.querySelector(".form.form-login");
  let formRegister = document.querySelector(".form.form-register");

  btnLogin.classList.add("btn-active");
  btnRegister.classList.remove("btn-active");

  formLogin.style = "display: flex";
  formRegister.style = "display: none";
  autoFocus();
};
const openRegister = () => {
  let btnLogin = document.getElementById("js-btn-login");
  let btnRegister = document.getElementById("js-btn-register");
  let formLogin = document.querySelector(".form.form-login");
  let formRegister = document.querySelector(".form.form-register");

  btnRegister.classList.add("btn-active");
  btnLogin.classList.remove("btn-active");
  formLogin.style = "display: none";
  formRegister.style = "display: flex";
  autoFocus();
};
