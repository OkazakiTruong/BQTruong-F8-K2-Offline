const formLogin = document.querySelector(".form-login");
const emailInput = formLogin.querySelector(".email-input");
const passwordInput = formLogin.querySelector(".password-input");

emailInput.focus();
emailInput.addEventListener("keyup",function(){
    if(this.value.match(/`^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`/)){
        console.log("true");
    }
})
function checkBeforeSubmit() {
    if(formLogin.match())
}
