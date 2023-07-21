const autoFocus = (login) => {
  let firstInputLogin = document.querySelector(
    ".form-login .form-field:nth-of-type(1) input"
  );
  let firstInputRegister = document.querySelector(
    ".form-register .form-field:nth-of-type(1) input"
  );
  if (login == true) {
    firstInputLogin.focus();
  } else {
    firstInputRegister.focus();
  }
};

autoFocus(true);

const openLogin = () => {
  let btnLogin = document.getElementById("js-btn-login");
  let btnRegister = document.getElementById("js-btn-register");
  let formLogin = document.querySelector(".form.form-login");
  let formRegister = document.querySelector(".form.form-register");

  btnLogin.classList.add("btn-active");
  btnRegister.classList.remove("btn-active");
  //   if (screen.width < 1351) {
  //     formLogin.style = "display: flex";
  //     formRegister.style = "display: none";
  //   } else {

  //   }
  formLogin.classList.remove("close");
  formRegister.classList.remove("open");
  formLogin.classList.add("open");
  formRegister.classList.add("close");
  autoFocus(true);
};
const openRegister = () => {
  let btnLogin = document.getElementById("js-btn-login");
  let btnRegister = document.getElementById("js-btn-register");
  let formLogin = document.querySelector(".form.form-login");
  let formRegister = document.querySelector(".form.form-register");

  btnRegister.classList.add("btn-active");
  btnLogin.classList.remove("btn-active");
  //   if (screen.width < 1351) {
  //     formLogin.style = "display: none";
  //     formRegister.style = "display: flex";
  //   } else {

  //   }
  formLogin.classList.remove("open");
  formRegister.classList.remove("close");
  formLogin.classList.add("close");
  formRegister.classList.add("open");
  autoFocus(false);
};
