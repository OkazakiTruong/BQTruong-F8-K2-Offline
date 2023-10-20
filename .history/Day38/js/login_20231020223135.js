import { client } from "./client.js";
const formLogin = document.querySelector(".form-login");
const emailInput = formLogin.querySelector(".email-input");
const passwordInput = formLogin.querySelector(".password-input");
const btnLogin = formLogin.querySelector(".btn-login");
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

const handleLogin = async (data) => {
  const { data: token, response } = await client.post("/auth/login", data);
  console.log(response);
};

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmpty();
  if (canLogin) {
    data = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    handleLogin(data);
  }
});
