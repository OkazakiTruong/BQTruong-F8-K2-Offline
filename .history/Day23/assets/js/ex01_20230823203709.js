const emailLogin = document.querySelector(".email-login");

emailLogin.addEventListener("focusout", function () {
  if (emailLogin.value === "") {
    console.log("you are unfocus");
  }
});
