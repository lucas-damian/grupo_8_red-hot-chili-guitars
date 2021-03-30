let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load', function(){   
    let $inputName=qs('#userName'),
    $nameErrors=qs('#nameErrors'),
    $email=qs("#email"),
    $emailErrors=qs('#emailErrors'),
    $pass=qs("#pass")
    $passErrors=qs('#passErrors'),
    $pass2=qs('#pass2'),
    $pass2Errors=qs('#pass2Errors'),
    $avatar=qs('#avatar'),
    $avatarErrors=qs('#avatarErrors'),
    regExAlpha= /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    
    
    
    $inputName.addEventListener('blur', function(){
        console.log($inputName.value.trim())
        switch (true) {
            case !$inputName.value.trim():
            $nameErrors.innerHTML = 'debes ingresar un usuario'
            $inputName.classList.add('is-invalid')
            break;
            case !regExAlpha.test($inputName.value):
            $nameErrors.innerHTML = 'el usuario ya esta registrado'
            $inputName.classList.add('is-invalid')  
            break; 
            default:
            $inputName.classList.remove('is-invalid');
            $inputName.classList.add('is-valid');
            $nameErrors.innerHTML = ''
            break;
        }
    })
    
    $email.addEventListener('blur', function() {
        switch (true) {
            case !$email.value.trim():
            $emailErrors.innerHTML = 'el email es requerido';
            $email.classList.add('is-invalid')
            break;
            case !regExEmail.test($email.value):
            $emailErrors.innerHTML = 'el email ya esta registrado';
            $email.classList.add('is-invalid')
            break
            default:
            $email.classList.remove('is-invalid');
            $email.classList.add('is-valid');
            $emailErrors.innerHTML = ''
            break;
        }
    })
    $pass.addEventListener('blur', function() {
        switch (true) {
            case !$pass.value.trim():
            $passErrors.innerHTML = 'Es necesario una contraseña';
            $pass.classList.add('is-invalid')
            break;
            case !regExPass.test($pass.value):
            $passErrors.innerHTML = 'Minimo 3 caracteres y máximo 6 caracteres';
            $pass.classList.add('is-invalid')
            break
            default:
            $pass.classList.remove('is-invalid');
            $pass.classList.add('is-valid');
            $passErrors.innerHTML = ''
            break;
        }
    })
    $pass2.addEventListener('blur', function(){
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
})