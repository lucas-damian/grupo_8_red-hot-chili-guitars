
 let $formCarga = qs("#formCarga"),
 /*--caja izquierda--*/
    $instrumento=qs("#instrumento"),
    $instrumentoErrors=qs("#instrumentoErrors"),
    $categoria=qs("#categoria"),
    $categoriaErrors=qs("#categoriaErrors"),
    /*--caja derecha--*/
    $color=qs("#color"),
    $colorErrors=qs("#colorErrors"),
    $valor=qs("#valor"),
    $valorErrors=qs("#valorErrors"),
    regExAlpha= /^[a-zA-Z\sñáéíóúü ]*$/,
    regExNum=/[^0-9]/;

window.addEventListener('load',function(){
    $instrumento.addEventListener("blur",function(){
        switch (true){
            case !this.value.trim():
                $instrumentoErrors.innerHTML += 'debes ingresar un instrumento';
                $instrumento.classList.add('is-invalid')
                break;
                case !regExAlpha.test($instrumento.value):
                    $instrumentoErrors.innerHTML = 'el instrumento no puede llevar simbolos';
                    $instrumento.classList.add('is-invalid')  
                    break
                    default:
                    $instrumento.classList.remove('is-invalid');
                    $instrumento.classList.add('is-valid');
                    $nameErrors.innerHTML = ''
                    break;
        }
    })
    $categoria.addEventListener("blur", function(){
        
        switch (true) {
            case !this.value.trim():
            $categoriaErrors.innerHTML = 'Ingrese una categoria';
            $categoria.classList.add('is-invalid')
            break;
            default:
            $categoria.classList.remove('is-invalid');
            $categoria.classList.add('is-valid');
            $categoriaErrors.innerHTML = ''
            break;
        }
    })
    $color.addEventListener("blur", function(){
        
        switch (true) {
            case !this.value.trim():
            $colorErrors.innerHTML = 'Cual es el color de su instrumento';
            $color.classList.add('is-invalid')
            break;
            case !regExAlpha.test($color.value):
            $colorErrors.innerHTML = 'El color no puede llevar simbolos';
            $color.classList.add('is-invalid')
            break
            default:
            $color.classList.remove('is-invalid');
            $color.classList.add('is-valid');
            $colorErrors.innerHTML = ''
            break;
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