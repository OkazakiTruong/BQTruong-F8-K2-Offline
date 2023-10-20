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
  const parentEl = ele.parentElement.parentElement;
  parentEl.querySelector(".input-err").remove();
}
function validateEmail(ele) {
  if (ele.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    removeErr(this);
  } else {
    showErr(ele, "Vui lòng nhập đúng định dạng email");
  }
}
emailInput.addEventListener("focusout", function () {
  if (this.value === "") {
    showErr(this, "Vui lòng điền đầy đủ thông tin");
    showErr(passwordInput, "Vui lòng điền đầy đủ thông tin");
  } else {
  }
});
emailInput.addEventListener("keydown", function () {});
passwordInput.addEventListener("focusout", function () {
  if (this.value === "") {
    showErr(this, "Vui lòng điền đầy đủ thông tin");
    showErr(emailInput, "Vui lòng điền đầy đủ thông tin");
  } else {
    if (
      this.value.match(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)
    ) {
      removeErr(this);
    } else {
      showErr(
        this,
        "Mật khẩu phải bao gồm 1 chữ cái in hoa, 1 số và lớn hơn 8 ký tự"
      );
    }
  }
});
