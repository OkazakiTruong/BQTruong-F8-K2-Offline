const formLogin = document.querySelector(".form-login");
const emailInput = formLogin.querySelector(".email-input");
const passwordInput = formLogin.querySelector(".password-input");

emailInput.focus();
emailInput.addEventListener("keyup", function () {
  console.log("key up");
  if (this.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    let parentEl = this.parentElement;
    console.log(parentEl);
  }
});
