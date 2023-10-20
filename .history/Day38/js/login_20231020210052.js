const formLogin = document.querySelector(".form-login");
const emailInput = formLogin.querySelector(".email-input");
const passwordInput = formLogin.querySelector(".password-input");

emailInput.focus();
emailInput.addEventListener("keyup", function () {
  let parentEl = this.parentElement;

  if (this.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
  } else {
    const errEl = document.createElement("p");
    errEl.classList.add("input-err");
    errEl.innerText = "Vui lòng nhập đúng định dạng email";
    if (!parentEl.querySelector(".input-err")) {
      parentEl.append(errEl);
    }
  }
});
