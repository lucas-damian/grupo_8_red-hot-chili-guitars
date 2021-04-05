let qs = function(element){
   return document.querySelector(element);
}


let $formRegister = qs("#formRegister"),
    $userName = qs('#userName'),
    $nameErrors = qs('#nameErrors'),
    
    $emailRegister = qs("#emailRegister"),
    $emailErrors = qs('#emailErrors'),
    
    $pass= qs("#passRegister")
    $passErrors = qs('#passErrors'),
    
    $pass2 = qs('#pass2-Register'),
    $pass2Errors = qs('#pass2Errors'),
    
    regExAlpha= /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


window.onload = function() {
    
    $userName.addEventListener("blur", function(){
        
        switch (true) {
            
            case !this.value.trim():
            $nameErrors.innerHTML += 'debes ingresar un usuario';
            $userName.classList.add('is-invalid')
            break;
            
            
            case !regExAlpha.test($userName.value):
            $nameErrors.innerHTML = 'el usuario no puede llevar simbolos';
            $userName.classList.add('is-invalid')  
            break; 
            
            
            default:
            $userName.classList.remove('is-invalid');
            $userName.classList.add('is-valid');
            $nameErrors.innerHTML = ''
            break;
        }
    })

    $emailRegister.addEventListener("blur", function(){
        
        switch (true) {
            case !this.value.trim():
            $emailErrors.innerHTML = 'el email es requerido';
            $emailRegister.classList.add('is-invalid')
            break;
            case !regExEmail.test($emailRegister.value):
            $emailErrors.innerHTML = 'el email no puede llevar mayusculas y siempre debe que tener @';
            $emailRegister.classList.add('is-invalid')
            break
            default:
            $emailRegister.classList.remove('is-invalid');
            $emailRegister.classList.add('is-valid');
            $emailErrors.innerHTML = ''
            break;
        }
    })

    $pass.addEventListener("blur", function(){

        switch (true) {
            case !this.value.trim():
            $passErrors.innerHTML = 'Es necesario una contraseña';
            $pass.classList.add('is-invalid')
            break;
            
            case !regExPass.test($pass.value):
            $passErrors.innerHTML = 'Minimo 3 caracteres y máximo 6 caracteres con letras minusculasy mayusculas';
            $pass.classList.add('is-invalid')
            break
            
            default:
            $pass.classList.remove('is-invalid');
            $pass.classList.add('is-valid');
            $passErrors.innerHTML = ''
            break;
        }

    })

    $pass2.addEventListener("blur", function(){

        switch (true) {
            case !$pass2.value.trim():
            $pass2Errors.innerHTML = 'Debes reingresar la contraseña';
            $pass2.classList.add('is-invalid')
            break;
            case $pass2.value != $pass.value:
            pass2Errors.innerHTML = 'Las contraseñas no coinciden';
            $pass2.classList.add('is-invalid')
            break;
            default:
            $pass2.classList.remove('is-invalid');
            $pass2.classList.add('is-valid');
            $pass2Errors.innerHTML = ''
            break;
        }

    })

}