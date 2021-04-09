let qs = function(element){
    return document.querySelector(element);
 }

 let $formEdit = qs("#formEdit"),
    $formCarga=qs('#formCarga')
 /*--caja izquierda--*/
    $instrumento=qs("#instrumento"),
    $instrumentoErrors=qs("#instrumentoErrors"),
    $categoria=qs("#categoria"),
    $categoriaErrors=qs("#categoriaErrors"),
    /*--caja derecha--*/
    $valor=qs("#valor"),
    $valorErrors=qs("#valorErrors"),

    $formImg=qs("#formImg"),
    $formImgError=qs("#formImgError"),
    $formImgPreview=qs("formImgPreview"),

    regExAlpha= /^[a-zA-Z\sñáéíóúü ]*$/,
    regExNum=/[^a-zA-Z]/;
    
    function validador (event){
        switch(true){
            
            case $instrumento.classList.contains("is-invalid") || $instrumento.value.length == 0:
                alert("Los campos Intrumento, Categoria, y Valor deben ser completados");
                event.preventDefault();
                break
            
            case $categoria.classList.contains("is-invalid") || $categoria.value.length == 0:
                alert("Los campos deben ser completados");
                event.preventDefault();
                break
        
            case $valor.classList.contains("is-invalid") || $valor.value.length == 0:
                alert("Los campos deben ser completados");
                event.preventDefault();

                break
                
            case $formImg.classList.contains("is-invalid") || $formImg.value.length == 0:
                alert("Debe añadirse una imagen");
                event.preventDefault();
                break

            default:
                event.submit();
                break   
        }
    }

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
        /*--Cuando se cambia el valor a letras tira error MySQL--*/
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
    /*--imagen--*/
    $formImg.addEventListener("change", function fileValidation() {
        let filePath = $formImg.value,
          allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i 
        if (!allowedExtensions.exec(filePath)) { 
          $formImgError.innerHTML = "Debe tener extensiones (.jpg - .jpeg - .png - .gif)"
          $formImg.value = "";
          $formImgPreview.innerHTML = "";
          return false;
        } else {
          if ($formImg.files && $formImg.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
              $formImgPreview.innerHTML = "";
              $formImgPreview.innerHTML = '<img src="' + e.target.result + '"/>';
            };
            reader.readAsDataURL($formImg.files[0]);
            $errorformImg.innerHTML = "";
            $formImg.classList.remove("invalido")
          }
        }
      });

      
      if($formCarga){ $formCarga.addEventListener("submit", validador);}
      if($formEdit){$formEdit.addEventListener("submit", validador);}
   
})