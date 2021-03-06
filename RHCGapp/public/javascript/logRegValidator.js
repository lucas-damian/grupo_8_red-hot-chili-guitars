

let $formRegister = qs("#formRegister"),
    $formLogin = qs("#formLogin"),

    $userName = qs('#userName'),
    $nameErrors = qs('#nameErrors'),
    
    $emailRegister = qs("#emailRegister"),
    $emailErrors = qs('#emailErrors'),
    
    $pass= qs("#passRegister")
    $passErrors = qs('#passErrors'),
    
    $pass2 = qs('#pass2-Register'),
    $pass2Errors = qs('#pass2Errors'),


    $user=qs('#user'),
    $userErrors=qs('#userErrors'),

    $password=qs('#password'),
    $passwordErrors=qs('#passwordErrors'),

    $passView = document.querySelectorAll(".view-div"),
    $passIcon = qs ("#passIcon"),
    
    regExAlpha= /^[a-zA-Z\sñáéíóúü ]*$/,
    
    regExEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    
    regExPass= /^(?=.*\d).{3,12}$/;

  /*   regExPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; */




window.onload = function() {


  
        $userName.addEventListener("blur", function(){
        
            switch (true) {
                
                case !$userName.value.trim():
                $nameErrors.innerHTML = 'debes ingresar un usuario';
                $userName.classList.add('is-invalid');
                break;
                
                
                case !regExAlpha.test($userName.value):
                $nameErrors.innerHTML = 'el usuario no puede llevar simbolos';
                $userName.classList.add('is-invalid');
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
                $emailRegister.classList.add('is-invalid');
                break;
                
                case !regExEmail.test($emailRegister.value):
                $emailErrors.innerHTML = 'el email no puede llevar mayusculas y siempre debe que tener @';
                $emailRegister.classList.add('is-invalid');
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
                $pass.classList.add('is-invalid');
                break;
                
                case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'Minimo 3 caracteres y máximo 6 caracteres';
                $pass.classList.add('is-invalid');
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


        $formRegister.addEventListener("submit", function(event){

            switch(true){
                
                case $userName.classList.contains("is-invalid") || $userName.value.length == 0:
                    alert("hay campos erroneos o vacío: Nombre");
                    event.preventDefault();
                    break
                
                case $emailRegister.classList.contains("is-invalid") || $emailRegister.value.length == 0:
                    alert("hay campos erroneos o vacío: Email");
                    event.preventDefault();
                    break
            
                case $pass.classList.contains("is-invalid") || $pass.value.length == 0:
                    alert("hay campos erroneos o vacío: Contraseña");
                    event.preventDefault();

                    break
                    
                case $pass2.classList.contains("is-invalid") || $pass2.value.length == 0:
                    alert("hay campos erroneos o vacío: Confirmar contraseña");
                    event.preventDefault();
                    break

                default:
                    event.submit();
                    break   
            }
            
        })

    
        
   

/* 
        ////// LOGUEO

*/

        $user.addEventListener("blur", function(){
            switch (true) {
            
                case !this.value.trim():
                $userErrors.innerHTML = 'Debes ingresar el email de un usuario';
                $user.classList.add('is-invalid')
                break;
                
                
                case !regExEmail.test($user.value):
                $userErrors.innerHTML = 'el email esta mal escrito';
                $user.classList.add('is-invalid')  
                break; 
                
                
                default:
                $userErrors.innerHTML = " ";
                $user.classList.remove('is-invalid');
                $user.classList.add('is-valid');
                break;
            }
        });
        
        $password.addEventListener("blur", function(){
            switch (true) {
            
                case !this.value.trim():
                $passwordErrors.innerHTML = 'Escribe la contraseña';
                $password.classList.add('is-invalid')
                break;
                
                case !regExPass.test($password.value):
                $passwordErrors.innerHTML = 'contraseña incorrecta o vacia';
                $password.classList.add('is-invalid')
                break;
                
                default:
                $password.classList.remove('is-invalid');
                $password.classList.add('is-valid');
                $passwordErrors.innerHTML = ''
                break;
            }
        })

        $formLogin.addEventListener("submit", function(event){

            switch(true){
                
                case $user.classList.contains("is-invalid") || $user.value.length == 0:
                    alert("hay campos erroneos o vacio: Email ");
                    event.preventDefault();
                    break
            
                case $password.classList.contains("is-invalid") || $password.value.length == 0:
                    alert("hay campos erroneos o vacío: Contraseña ");
                    event.preventDefault();

                    break
                    

                default:
                    event.submit();
                    break   
            }
            
        })



/* 
        for(let i = 0; i < $passView.length; i++){

            
                
            $passView[i].addEventListener("click", function(){
                alert("view touched")

               if($passView[0]){
                $password.type = "text";
               }

               if($passView[1]){
                $pass.type = "text";
                }
                
                if($passView[2]){
                $pass2.type = "text";
                }

            })
        } */
        
}