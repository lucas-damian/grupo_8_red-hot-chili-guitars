/* let qs = function(element){
    return document.querySelector(element);
 } */

 let $formSearch = qs("#formSearch"),

 $search= qs("#search")
 $searchMobile = qs("#searchBtn")
 
 regExAlpha= /^[a-zA-Z\sñáéíóúü ]*$/


 window.onload = function(){


    $formSearch.addEventListener("submit",function(event){

        switch(true){
            
            case !$search.value.trim():
                alert("no se puede buscar con campo vacío");
                event.preventDefault();
                break

            case !regExAlpha.test($search.value):
                alert("no se aceptan números");
                event.preventDefault();
                break; 

            default:
                event.submit();    
        }
    })


 }