const qs = (e) => document.querySelector(e)

window.onload = function(){
    console.log('El javascript fue vinculado con exito!')

    let formulario  = qs('#formulario')
    let Name = qs('#name')
    let Detail = qs('#detail')
    let variety = qs('#variety')
    
    let img = qs('#formFile')
    let time = qs('#time')
    let Origin = qs('#origin')
    let Year = qs('#year')

    let Price = qs('#price')
    let PriceBox = qs('#priceBox')

    let elementForm = formulario.elements;
        console.log(elementForm)

    /* (img.value)?img.value = "": null */

    let regLetras = /^[a-zA-Z\sñáéíóúü]*$/
    let regExExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let soloNumeros = /^([0-9])*$/
    const oneMB = 1048576;

    Name.addEventListener('blur',()=>{
        switch (true) {
            case !Name.value:
                errorName.innerHTML = "El campo del nombre es ¡OBLIGATORIO!"
                Name.classList.add('is-invalid')
                break;
            case !regLetras.test(Name.value):
                errorName.innerHTML = "Solo letras por favor"
                Name.classList.add('is-invalid')
                break;
        
            default:
                errorName.innerHTML = ""
                Name.classList.remove('is-invalid')
                Name.classList.add('is-valid')
                break;
        }
    })
    Detail.addEventListener('blur',()=>{
        switch (true) {
            case !Detail.value:
                errorDetail.innerHTML = "El campo Detalle es ¡OBLIGATORIO!"
                Detail.classList.add('is-invalid')
                break;
            default:
                errorDetail.innerHTML = ""
                Detail.classList.remove('is-invalid')
                Detail.classList.add('is-valid')
                break;
        }
    })
    variety.addEventListener('blur',()=>{
        switch (true) {
            case !variety.value:
                errorvariety.innerHTML = "La Categoria es ¡OBLIGATORIA!"
                variety.classList.add('is-invalid')
                break;   
            default:
                errorvariety.innerHTML = ""
                variety.classList.remove('is-invalid')
                variety.classList.add('is-valid')
                break;
        }
    })
    category.addEventListener('blur',()=>{
        switch (true) {
            case !category.value:
                errorcategory.innerHTML = "La Categoria es ¡OBLIGATORIA!"
                category.classList.add('is-invalid')
                break;   
            default:
                errorcategory.innerHTML = ""
                category.classList.remove('is-invalid')
                category.classList.add('is-valid')
                break;
        }
    })
    time.addEventListener('blur',()=>{
        switch (true) {
            case !time.value:
                errorTime.innerHTML = "El Tiempo en Botella es ¡OBLIGATORIO!"
                time.classList.add('is-invalid')
                break;
        
            default:
                errorTime.innerHTML = ""
                time.classList.remove('is-invalid')
                time.classList.add('is-valid')
                break;
        }
    })
    Origin.addEventListener('blur',()=>{
        switch (true) {
            case !Origin.value:
                errorOrigin.innerHTML = "El Origen es ¡OBLIGATORIO!"
                Origin.classList.add('is-invalid')
                break;
            default:
                errorOrigin.innerHTML = ""
                Origin.classList.remove('is-invalid')
                Origin.classList.add('is-valid')
                break;
        }
    })
    Year.addEventListener('blur',()=>{
        switch (true) {
            case !Year.value:
                errorYear.innerHTML = "El año del Vino es ¡OBLIGATORIO!"
                Year.classList.add('is-invalid')
                break;
            case !soloNumeros.test(Price.value):
                errorPrice.innerHTML = "Solo Numeros por favor"
                Price.classList.add('is-invalid')
                break;
            default:
                errorYear.innerHTML = ""
                Year.classList.remove('is-invalid')
                Year.classList.add('is-valid')
                break;
        }
    })
    /* Color.addEventListener('blur',()=>{
        switch (true) {
            case !Color.value:
                errorColor.innerHTML = "Cual es el color del vino?"
                Color.classList.add('is-invalid')
                break;
    
            default:
                errorColor.innerHTML = ""
                Color.classList.remove('is-invalid')
                Color.classList.add('is-valid')
                break;
        }
    }) */
    Price.addEventListener('blur',()=>{
        switch (true) {
            case !Price.value:
                errorPrice.innerHTML = "El Precio es ¡OBLIGATORIO!"
                Price.classList.add('is-invalid')
                break;
            case !soloNumeros.test(Price.value):
                errorPrice.innerHTML = "Solo Numeros por favor"
                Price.classList.add('is-invalid')
                break;
        
            default:
                errorPrice.innerHTML = ""
                Price.classList.remove('is-invalid')
                Price.classList.add('is-valid')
                break;
        }
    })
    PriceBox.addEventListener('blur',()=>{
        switch (true) {
            case !PriceBox.value:
                errorPriceBox.innerHTML = "El Precio por caja es ¡OBLIGATORIO!"
                PriceBox.classList.add('is-invalid')
                break;
            case !soloNumeros.test(PriceBox.value):
                errorPriceBox.innerHTML = "Solo numeros por favor"
                PriceBox.classList.add('is-invalid')
                break;
        
            default:
                errorPriceBox.innerHTML = ""
                PriceBox.classList.remove('is-invalid')
                PriceBox.classList.add('is-valid')
                break;
        }
    })

    img.addEventListener('blur',function(){
        switch (true) {
            case img.value == "":
                errorFoto = "Este campo es obligatorio"
                img.classList.add('is-invalid')
            break
        default:
            img.classList.remove('is-invalid');
            img.classList.add('is-valid');
            errorFoto.innerHTML = "";
        }
    })
    img.addEventListener('change', (e)=> {
        switch (true) {
            case !regExExtensions.exec(img.value):
                errorFoto = "Solo imagenes con extension jpg, png, gif, webp"
                img.classList.add('is-invalid')
                vistaPrevia.src = ""
                break;
            case img.files[0].size > oneMB * 2:
                errorFoto = "El archivo solo debe pesar menos de 2mb"
                img.classList.add('is-invalid')
                vistaPrevia.src = ""
                break

            default:
                img.classList.remove('is-invalid');
                img.classList.add('is-valid');
                errorFoto.innerHTML = "";

                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0])

                reader.onload = () => {
                    vistaPrevia.src = reader.result
                }
                break;
        }
    })

    formulario.addEventListener('submit',(e)=>{

        e.preventDefault();
        let error = false
        let elementForm = formulario.elements;

        for (let index = 1; index < elementForm.length -1; index++) {
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

}