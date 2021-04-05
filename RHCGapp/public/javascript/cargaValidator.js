let qs = function(element){
    return document.querySelector(element);
 }

 let $formCarga = qs("#formCarga"),
 /*--caja izquierda--*/
    $instrumento=qs("#instrumento"),
    $instrumentoErrors=qs("#instrumentoErrors"),
    $tipo=qs("#tipo"),
    $tipoErrors=qs("#tipoErrors"),
    $marca=qs("#marca"),
    $marcaErrors=qs("#marcaErrors"),
    $categoria=qs("#categoria"),
    $categoriaErrors=qs("#categoriaErrors"),
    $desc=qs("#desc"),
    $descErrors=qs("#descErrors"),
    $categoria=qs("#categoria"),
    $categoriaErrors=qs("#categoriaErrors"),
    /*--caja derecha--*/
    $modelo=qs("#modelo"),
    $modeloErrors=qs("#modeloErrors"),
    $color=qs("#color"),
    $colorErrors=qs("#colorErrors"),
    $valor=qs("#valor"),
    $valorErrors=qs("#valorErrors"),
    regExAlpha= /^[a-zA-Z\sñáéíóúü ]*$/,
    regExNum=/[^0-9]/;

window.onload=function(){
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
    $tipo.addEventListener("blur", function(){
        
        switch (true) {
            case !this.value.trim():
            $tipoErrors.innerHTML = 'el tipo de instrumento es requerido';
            $tipo.classList.add('is-invalid')
            break;
            default:
            $tipo.classList.remove('is-invalid');
            $tipo.classList.add('is-valid');
            $tipoErrors.innerHTML = ''
            break;
        }
    })
    $marca.addEventListener("blur", function(){
        
        switch (true) {
            case !this.value.trim():
            $marcaErrors.innerHTML = 'La marca es requerido';
            $marca.classList.add('is-invalid')
            break;
            default:
            $marca.classList.remove('is-invalid');
            $marca.classList.add('is-valid');
            $marcaErrors.innerHTML = ''
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
    $modelo.addEventListener("blur", function(){
        
        switch (true) {
            case !this.value.trim():
            $modeloErrors.innerHTML = 'Cual es el modelo?';
            $modelo.classList.add('is-invalid')
            break;
            default:
            $modelo.classList.remove('is-invalid');
            $modelo.classList.add('is-valid');
            $modeloErrors.innerHTML = ''
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
}