let qs = function(element){
    return document.querySelector(element);
 }

const $menuBtn = document.querySelectorAll(".menu-btn");
const $barra = document.getElementById("barra");

const $carritoBtn = document.querySelectorAll(".carrito--row");
const $extendedBtn = document.querySelectorAll(".carrito-extended");



/// search on mobile 
const $searchForm = document.querySelector(".header__form")
const $searchHeader = document.querySelector(".header")
const $hamBtn = document.querySelector(".hamburguer")/* ham-search */

const $searchBar = document.querySelector(".search-bar");

const $searchInput = document.querySelector(".barra-busqueda");

const $searchBtn = document.querySelector(".btn--search");

const $loginBox = document.querySelector(".login");



window.onload = function(){


    for(let i = 0; i < $menuBtn.length ; i++){
        $menuBtn[i].addEventListener("click", () => {
            $barra.classList.toggle("active");
        })
    }
    
    
    $barra.addEventListener("click", function(e){
        if(e.target == $menuBtn){
            $barra.classList.toggle("active");
        } else if(e.target == $barra){
            $barra.classList.toggle("active");
        }
    });
    
    
    
    
    for(let i = 0; i < $carritoBtn.length ; i++){
        $carritoBtn[i].addEventListener("click", () => {
             for(let j = 0; j < $extendedBtn.length ; j++){
                $extendedBtn[j].classList.toggle("active");
            } 
        })
    } 

   
   /*  $searchForm.addEventListener("submit", function(e){
        
        e.preventDefault();
        

            if(window.matchMedia("(max-width: 767px)").matches){
                
                $searchBtn.onclick = function(){
                   
                    $loginBox.classList.add("btn-none");
                    $searchHeader.classList.add("search-header");
                    $searchBar.classList.add("busqueda__mobile");
                    $searchBtn.classList.add("btn--search__active");
                    $searchInput.classList.add("searchInput-mobile");
                    $hamBtn.classList.add("ham-search")
                }

            }   
            

            
            /* $loginBox.classList.remove("btn-none");
                $searchHeader.classList.remove("search-header");
                $searchBar.classList.remove("busqueda__mobile");
                $searchBtn.classList.remove("btn--search__active");
                $searchInput.classList.remove("searchInput-mobile");
                $hamBtn.classList.remove("ham-search") 
            
    }) */
}