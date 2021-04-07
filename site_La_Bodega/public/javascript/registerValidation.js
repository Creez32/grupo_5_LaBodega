const qs = (e) => document.querySelector(e)

window.addEventListener('load', () => {
    console.log('Javascript está vinculado correctamente');

    let formulario  = qs('#form')
    let Name = qs("#name");
    let Last_name = qs("#lastName");
    let Direccion =qs("#address")
    let Email = qs("#email");
    let Password = qs("#pass");
    let Password2 = qs("#pass2");
    let Foto_x = qs("#formFile");
    let Edad = qs("#dateOfBirth")
  

    /*(inputFoto_x.value) ? inputFoto_x.value = "" : null */
    let regExLetras = /^[a-zA-Z\sñáéíóúü]*$/
    let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;


        Foto_x.addEventListener('change', (e) => {
            switch (true) {
                case !regExExt.exec(Foto_x.value):
                    errorFoto_x.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                    Foto_x.classList.add('is-invalid')
                    vistaPrevia.src = ""
                    break;
                case Foto_x.files[0].size > oneMB * 2:
                    errorFoto_x.innerHTML = "El archivo debe pesar menos de 2Mb"
                    Foto_x.classList.add('is-invalid')
                    vistaPrevia.src = ""
                    break;
                default:
                    Foto_x.classList.remove('is-invalid');
                    Foto_x.classList.add('is-valid');
                    errorFoto_x.innerHTML = "";
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0])
                    reader.onload = () => {
                        vistaPrevia.src = reader.result
                    }
                    break;
            }
        })

    Email.addEventListener('blur', () => {
        switch (true) {
            case !Email.value:
                errorEmail.innerHTML = "El campo email es obligatorio";
                Email.classList.add('is-invalid');
                break;
                case !regExEmail.test(Email.value):
                    errorEmail.innerHTML = "el Email debe ser válido"
                    Email.classList.add('is-invalid');
                    break
            default:
                errorEmail.innerHTML = "";
                Email.classList.remove('is-invalid');
                Email.classList.add('is-valid');
                break;
        }

    })

    Password.addEventListener('blur', () => {
        switch (true) {
            case !Password.value:
                errorPassword.innerHTML = "El campo contraseña es obligatorio";
                Password.classList.add('is-invalid');
                break;
                case !regExPass.test(Password.value):
                    errorPassword.innerHTML = "La contraseña debe tener entre 6 y 8 caracteres y debe contener una mayuscula, una minuscula y un numero"
                    Password.classList.add('is-invalid');
                    break
            default:
                errorPassword.innerHTML = "";
                Password.classList.remove('is-invalid');
                Password.classList.add('is-valid');
                break;
        }

    })
    Password2.addEventListener('blur', () => {
        switch (true) {
            case !Password2.value:
                errorPassword2.innerHTML = "El campo contraseña es obligatorio";
                Password2.classList.add('is-invalid');
                break;
            case !regExPass.test(Password2.value):
                errorPassword2.innerHTML = "La contraseña debe tener entre 6 y 8 caracteres"
                Password2.classList.add('is-invalid');
                break;
            case Password2.value != Password.value:
                errorPassword2.innerHTML = "Las contraseñas no coinciden";
                Password2.classList.add('is-invalid');
                break; 
             default:
                errorPassword2.innerHTML = "";
                Password2.classList.remove('is-invalid');
                Password2.classList.add('is-valid');
                break; 
        }

    })
    

    Name.addEventListener('blur', () => {
        switch (true) {
            case !Name.value:
                errorName.innerHTML = "El campo nombre es obligatorio";
                Name.classList.add('is-invalid');
                break;
                case !regExLetras.test(Name.value):
                    errorName.innerHTML = "Solo letras"
                    Name.classList.add('is-invalid');
                    break
            default:
                errorName.innerHTML = "";
                Name.classList.remove('is-invalid');
                Name.classList.add('is-valid');
                break;
        }

    })
    Last_name.addEventListener('blur', () => {
        switch (true) {
            case !Last_name.value:
                errorLast_name.innerHTML = "El campo apellido es obligatorio";
                Last_name.classList.add('is-invalid');
                break;
                case !regExLetras.test(Last_name.value):
                    errorLast_name.innerHTML = "Solo letras"
                    Last_name.classList.add('is-invalid');
                    break
            default:
                errorLast_name.innerHTML = "";
                Last_name.classList.remove('is-invalid');
                Last_name.classList.add('is-valid');
                break;
        }

    })
    Direccion.addEventListener('blur', () => {
        switch (true) {
            case !Direccion.value:
                errorDireccion.innerHTML = "El campo Direccion es obligatorio";
                Direccion.classList.add('is-invalid');
                break;

            default:
                errorDireccion.innerHTML = "";
                Direccion.classList.remove('is-invalid');
                Direccion.classList.add('is-valid');
                break;
        }

    })

    Edad.addEventListener('blur',()=>{
        console.log(moment())
        switch (true) {
            case !Edad.value:
                errorEdad.innerHTML = "El campo Fecha de nacimiento es obligatorio"
                Edad.classList.add('is-invalid');
                break;
        case moment(Edad.value) > moment():
            errorEdad.innerHTML = "Coloque una fecha adecuada"
                Edad.classList.add('is-invalid');
                break;
                case moment().diff(moment(Edad.value),"years")<18:
                    errorEdad.innerHTML = "Debe ser mayor de edad para continuar"
                Edad.classList.add('is-invalid');
            default:
                errorEdad.innerHTML = "";
                Edad.classList.remove('is-invalid');
                Edad.classList.add('is-valid');
                break;
        }
    })

    formulario.addEventListener('submit',(e)=>{

        e.preventDefault();
        let error = false
        let elementForm = formulario.elements;

        for (let index = 0; index < elementForm.length -1; index++) {
            if(!elementForm[index].value){
                elementForm[index].classList.add('is-invalid');
                msgError.innerHTML = 'Los campos señalados son obligatorios'
                error = true
            }
        }

        if(!error){
            formulario.submit()
        }

    })


})