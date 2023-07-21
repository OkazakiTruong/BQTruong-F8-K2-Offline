const openLogin = () => {
  let btnLogin = document.getElementById("js-btn-login");
  let btnRegister = document.getElementById("js-btn-register");
  let firstInput = document.querySelector;
  let formLogin = document.querySelector(".form.form-login");
  let formRegister = document.querySelector(".form.form-register");

  btnLogin.classList.add("btn-active");
  btnRegister.classList.remove("btn-active");
  formLogin.style = "display: flex";
  formRegister.style = "display: none";
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
};
