import { client } from "./client.js";
const formLogin = document.querySelector(".form-login");
const emailInput = formLogin.querySelector(".email-input");
const passwordInput = formLogin.querySelector(".password-input");
const btnLogin = document.querySelector(".btn-login");
let canLogin = false;

// emailInput.focus();
const loading = (flag) => {
  if (flag) {
    btnLogin.innerHTML = `<img src="./img/Rolling-1s-200px.gif" alt="">`;
    btnLogin.disabled = true;
  } else {
    btnLogin.innerText = "Đăng nhập";
    btnLogin.disabled = false;
  }
};
//bring data from form register
function dataFromRegister() {
  let data = localStorage.getItem("from_form_register");
  if (data) {
    let dataObj = JSON.parse(data);
    console.log(dataObj);
    emailInput.value = dataObj.email;
    passwordInput.value = dataObj.password;
    localStorage.removeItem("from_form_register");
  }
}
dataFromRegister();
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
  const { data: loginData, response } = await client.post("/auth/login", data);

  const tokens = {
    accessToken: loginData.data.accessToken,
    refreshToken: loginData.data.refreshToken,
  };
  if (response.ok) {
    localStorage.setItem("login_token", JSON.stringify(tokens));
    window.location.href = "././ex01.html";
  } else {
    alert("Tài khoản mật khẩu không chính xác!!!");
  }
};

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmpty();
  if (canLogin) {
    loading(true);
    handleLogin({
      email: emailInput.value,
      password: passwordInput.value,
    });
    // loading(false);
  }
});
