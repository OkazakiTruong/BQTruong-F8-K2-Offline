const formLogin = document.querySelector(".form-login");
const emailInput = formLogin.querySelector(".email-input");
const passwordInput = formLogin.querySelector(".password-input");

emailInput.focus();
function showErr(ele = null, message) {
  parentEl = ele.parentElement.parentElement;
  const errEl = document.createElement("p");
  errEl.classList.add("input-err");
  errEl.innerText = message;
  if (!parentEl.querySelector(".input-err")) {
    parentEl.append(errEl);
  }
}
emailInput.addEventListener("focusout", function () {
  let parentEl = this.parentElement.parentElement;
  if (this.value === "") {
  } else {
    if (this.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
      parentEl.querySelector(".input-err").remove();
    } else {
    }
  }
});
