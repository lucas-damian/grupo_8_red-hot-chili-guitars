

const menuBtn = document.querySelectorAll(".menu-btn");
const barra = document.getElementById("barra");

const carritoBtn = document.querySelectorAll(".carrito--row");
const extendedBtn = document.querySelectorAll(".carrito-extended");

const botonRegister = document.querySelector('.btn--register')



window.onload = function () {

    for(let i = 0; i < menuBtn.length ; i++){
        menuBtn[i].addEventListener("click", () => {
            barra.classList.toggle("active");
        })
    }
    
    
    
    
    
    for(let i = 0; i < carritoBtn.length ; i++){
        carritoBtn[i].addEventListener("click", () => {
             for(let j = 0; j < extendedBtn.length ; j++){
                extendedBtn[j].classList.toggle("active");
            } 
        })
    } 
    
    window.addEventListener('load',{
        function(event){
            botonRegister.preventDefault(event)
        }
    })


}