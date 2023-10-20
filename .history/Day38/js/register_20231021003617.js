import { client } from "./client.js";
const formRegister = document.querySelector(".form-register");
const nameInput = formRegister.querySelector(".name-input");
const emailInput = formRegister.querySelector(".email-input");
const passwordInput = formRegister.querySelector(".password-input");
let canLogin = false;

// emailInput.focus();
//validate email and password
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
  if (parentEl.querySelector(".input-err")) {
    parentEl.querySelector(".input-err").remove();
  }
}

function validateEmail(ele) {
  if (ele.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    canLogin = true;
    removeErr(ele);
  } else {
    canLogin = false;
    showErr(ele, "Vui lòng nhập đúng định dạng email");
  }
}
function validatePassword(ele) {
  if (ele.value.match(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)) {
    removeErr(ele);
    canLogin = true;
  } else {
    canLogin = false;
    showErr(
      ele,
      "Mật khẩu phải bao gồm 1 chữ cái in hoa, 1 số và lớn hơn 8 ký tự"
    );
  }
}

function checkEmpty() {
  if (nameInput.value === "") {
    showErr(nameInput, "Vui lòng không bỏ trống");
    canLogin = false;
  }
  if (emailInput.value === "") {
    showErr(emailInput, "Vui lòng không bỏ trống");
    canLogin = false;
  } else {
    validateEmail(emailInput);
  }
  if (passwordInput.value === "") {
    showErr(passwordInput, "Vui lòng không bỏ trống");
    canLogin = false;
  } else {
    validatePassword(passwordInput);
  }
}

emailInput.addEventListener("focusout", checkEmpty);
emailInput.addEventListener("keydown", function () {
  validateEmail(this);
});

passwordInput.addEventListener("focusout", checkEmpty);
passwordInput.addEventListener("keyup", function () {
  validatePassword(this);
});

const handleRegister = async (data) => {
  const { response } = await client.post("/auth/register", data);
  if (response.ok) {
    localStorage.setItem("from_form_register", JSON.stringify(data));
    console.log("Tạo tài khoản thành công");
    window.location.href = "././login.html";
  } else {
    alert("Tài khoản đã tồn tại!!!");
  }
};

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmpty();
  if (canLogin) {
    handleRegister({
      email: emailInput.value,
      password: passwordInput.value,
      name: nameInput.value,
    });
  }
});
