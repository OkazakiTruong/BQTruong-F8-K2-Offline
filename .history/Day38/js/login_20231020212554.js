const formLogin = document.querySelector(".form-login");
const emailInput = formLogin.querySelector(".email-input");
const passwordInput = formLogin.querySelector(".password-input");

emailInput.focus();
function showErr(ele = null, message) {
  const parentEl = ele.parentElement.parentElement;

  if (!parentEl.querySelector(".input-err")) {
    const errEl = document.createElement("p");
    errEl.classList.add("input-err");
    errEl.innerText = message;
    parentEl.append(errEl);
  } else {
    parentEl.querySelector(".input-err").innerText = message;
  }
}
function removeErr(ele) {
  let parentEl = ele.parentElement.parentElement;
}
emailInput.addEventListener("focusout", function () {
  let parentEl = this.parentElement.parentElement;
  if (this.value === "") {
    showErr(this, "Vui lòng điền đầy đủ thông tin");
    showErr(passwordInput, "Vui lòng điền đầy đủ thông tin");
  } else {
    if (this.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
      parentEl.querySelector(".input-err").remove();
    } else {
      showErr(this, "Vui lòng nhập đúng định dạng email");
    }
  }
});
