const qs = (e) => document.querySelector(e)


window.addEventListener('load', () => {
    console.log('Javascript está vinculado correctamente');

    let formulario = qs("#form");
    let Email = qs("#email");
    let Pass = qs("#pass");

    let regExEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




    Email.addEventListener('blur', () => {
        switch (true) {
            case !Email.value:
                errorEmail.innerHTML = "El email es obligatorio";
                Email.classList.add('is-invalid');
                break;
            case !regExEmail.test(Email.value):
                errorEmail.innerHTML = "Ingrese un email válido";
                Email.classList.add('is-invalid');
                break;
            default:
                errorEmail.innerHTML = "";
                Email.classList.remove('is-invalid');
                Email.classList.add('is-valid');
                break;
        }
    })

    Pass.addEventListener('blur', () => {
        switch (true) {
            case !Pass.value:
                errorPass.innerHTML = "La contraseña es obligatorio";
                Pass.classList.add('is-invalid');
                break;
            default:
                errorPass.innerHTML = "";
                Pass.classList.remove('is-invalid');
                Pass.classList.add('is-valid');
                break;
        }

    })

    formulario.addEventListener('submit', (e) => {
        let error = false;
        e.preventDefault();
        let elementsForm = formulario.elements;

        for (let index = 0; index < elementsForm.length - 2; index++) {
            if (!elementsForm[index].value) {
                elementsForm[index].classList.add('is-invalid')
                msgError.innerHTML = "Los campos señalados son obligatorios"
                error = true;
            }
        }
        if (!error) {
            formulario.submit()
        }
    })
})