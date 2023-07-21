const openLogin = () => {
  let btnLogin = document.getElementById("js-btn-login");
  let btnRegister = document.getElementById("js-btn-register");
  btnLogin.classList.add("btn-active");
  btnRegister.classList.remove("btn-active");
};
