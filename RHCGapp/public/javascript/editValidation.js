let qs = function(element){
    return document.querySelector(element);
 }

 let $formCarga = qs("#formEdit"),
 /*--caja izquierda--*/
    $instrumento=qs("#instrumento"),
    $instrumentoErrors=qs("#instrumentoErrors"),
    $categoria=qs("#categoria"),
    $categoriaErrors=qs("#categoriaErrors"),
    /*--caja derecha--*/
    $valor=qs("#valor"),
    $valorErrors=qs("#valorErrors"),
    regExAlpha= /^[a-zA-Z\sñáéíóúü ]*$/,
    regExNum=/[^a-zA-Z]/;

window.addEventListener('load',function(){
    $instrumento.addEventListener("blur",function(){
        if(!$instrumento.value.trim()){
            $instrumentoErrors.innerHTML='Elija el instrumento';
            $instrumento.classList.add('is-invalid')
        }else{
            $instrumento.classList.remove('is-invalid');
            $instrumento.classList.add('is-valid');
            $instrumentoErrors.innerHTML =''
        }
    })

    $categoria.addEventListener("blur", function(){
        if(!$categoria.value.trim()){
            $categoriaErrors.innerHTML='Elija la categoria';
            $categoria.classList.add('is-invalid')
        }else{
            $categoria.classList.remove('is-invalid');
            $categoria.classList.add('is-valid');
            $categoriaErrors.innerHTML =''
        }
    })
        
    $valor.addEventListener("blur", function(){
        
        switch (true) {
            case !this.value.trim():
            $valorErrors.innerHTML = 'el valor del instrumento es requerido';
            $valor.classList.add('is-invalid')
            break;
            case !regExNum.test($valor.value):
            $valorErrors.innerHTML = 'el valor no puede llevar Letras';
            $valor.classList.add('is-invalid')  
            break; 
            default:
            $valor.classList.remove('is-invalid');
            $valor.classList.add('is-valid');
            $valorErrors.innerHTML = ''
            break;
        }
    })
})