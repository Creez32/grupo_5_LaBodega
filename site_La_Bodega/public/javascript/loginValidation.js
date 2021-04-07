window.onload = function(){

    let formulario = document.getElementById("formulario");  
 
    let inputEmail = document.getElementById("email");  
 
    let inputPassword = document.getElementById("pass");  
 
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
    let inputErrorEmail = document.getElementById("errorEmail");
 
    let inputErrorPass = document.getElementById("errorPassword");
 
    function ValidacionLogin(){
        let errores = [];
        if(!regexEmail.test(inputEmail.value)){
         inputEmail.classList.add("is-invalid");
         inputErrorEmail.classList.add("invalid-feedback");
         inputErrorEmail.innerHTML="El email no es valido";
         errores.push("Email");
        } else {
            inputEmail.classList.remove("is-invalid");
            inputErrorEmail.classList.remove("invalid-feedback");
            inputEmail.classList.add("is-valid");
            inputErrorEmail.innerHTML="";
        }
        if(inputPassword.value.length < 6 || inputPassword.value.length > 12){
         inputPassword.classList.add("is-invalid");
         inputErrorPass.classList.add("invalid-feedback");
         inputErrorPass.innerHTML="La contraseña tiene que ser  mayor a 8 y menor que 12";
         errores.push("password");
        } else {
            inputPassword.classList.remove("is-invalid");
            inputErrorPass.classList.remove("invalid-feedback");
            inputPassword.classList.add("is-valid");
            inputErrorPass.innerHTML="";
        }
        return errores
    }
    formulario.onsubmit=(e)=>{
        e.preventDefault();
        let errores = ValidacionLogin();
        if(!errores.length > 0){
            formulario.submit();
        }
    }
 }
 