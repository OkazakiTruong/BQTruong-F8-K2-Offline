const emailLogin = document.querySelector(".email-login");
const alertLogin = document.querySelector(".alertEmail ");

emailLogin.addEventListener("focusout", function () {
  if (emailLogin.value === "") {
    alertLogin.style = "display: block";
  }
});
