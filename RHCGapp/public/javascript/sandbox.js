const menuBtn = document.querySelectorAll(".menu-btn");
const barra = document.getElementById("barra");
const carritoBtn = document.querySelectorAll(".carrito--row");
const extendedBtn = document.querySelectorAll(".carrito-extended");
const botonRegister = document.querySelector('.btn--register')

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

/* let carritoBtn = document.getElementById("c1");

let extendedBtn = document.getElementById("1");
console.log("normal" + extendedBtn)


extendedBtn.id++

console.log("incrementado" + extendedBtn) */


/* for(let i = 0; i < carritoBtn.length ; i++){
    carritoBtn[i].addEventListener("click", () => {

        for(let j = 0; j < extendedBtn.length ; j++){
            extendedBtn[j].classList.toggle("active");
            extendedBtn.id++ ;
            console.log("extended :" + extendedBtn)
        }

        carritoBtn = carritoBtn++;
        console.log("carrito :" + carritoBtn)
    })
} */

/* for(let i = 0; i < carritoBtn.length ; i++){
    carritoBtn[i].addEventListener("click", () => {
        extendedBtn2.classList.toggle("active");
        /* for(let j = 0; j < extendedBtn.length ; j++){
            extendedBtn[j].classList.toggle("active");
        } 
    })
} */

/* for(let i = 0; i < carritoBtn.length ; i++){
    carritoBtn[i].addEventListener("click", () => {
        extendedBtn3.classList.toggle("active");
        /* for(let j = 0; j < extendedBtn.length ; j++){
            extendedBtn[j].classList.toggle("active");
        } 
    })
} */