let qs = function(element){
    return document.querySelector(element);
 }
 
 let $formLogin=qs("#formLogin"),
    $user=qs('#user'),
    $userErrors=qs('#userErrors'),

    $password=qs('#password'),
    $passwordErrors=qs('#passwordErrors'),

    regExEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,12}$/;

window.onload = function() {

        $user.addEventListener("blur", function(){
            switch (true) {
            
                case !this.value.trim():
                $userErrors.innerHTML += 'Debes ingresar el email de un usuario';
                $user.classList.add('is-invalid')
                break;
                
                
                case !regExEmail.test($user.value):
                $userErrors.innerHTML = 'el email esta mal escrito';
                $user.classList.add('is-invalid')  
                break; 
                
                
                default:
                $user.classList.remove('is-invalid');
                $user.classList.add('is-valid');
                $userErrors.innerHTML = ''
                break;
            }
        })
        $pass.addEventListener("blur", function(){
            switch (true) {
            
                case !this.value.trim():
                $passErrors.innerHTML += 'Escribe la contraseña';
                $pass.classList.add('is-invalid')
                break;
                case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'Minimo 3 caracteres y máximo 6 caracteres con letras minusculasy mayusculas';
                $pass.classList.add('is-invalid')
                break;
                default:
                $pass.classList.remove('is-invalid');
                $pass.classList.add('is-valid');
                $passErrors.innerHTML = ''
                break;
            }
        })
    }