const openLogin = () => {
  let btnLogin = document.getElementById("js-btn-login");
  let btnRegister = document.getElementById("js-btn-register");
  btnLogin.classList.add("btn-active");
  btnRegister.classList.remove("btn-active");
};
const openRegister = () => {
  let btnLogin = document.getElementById("js-btn-login");
  let btnRegister = document.getElementById("js-btn-register");
  btnRegister.classList.add("btn-active");
  btnLogin.classList.remove("btn-active");
};
