
const input = document.querySelector(".search-input");
const lista = document.querySelector(".productos-container");
const items = document.querySelectorAll(".productos-item");


input.addEventListener("keyup", (e) => {
    const term = e.target.value.toLocaleLowerCase().trim();

    Array.from(items).forEach(item => {
        const title = item.firstElementChild.textContent
        
        if(title.toLocaleLowerCase().indexOf(term) != -1){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
    
});


/* const filterHeroes = (term) => {

    Array.from(form.children)
        .filter((div) => !div.textContent.toLocaleLowerCase().includes(term) )
        .forEach((div) => div.classList.add("filtered") );

    Array.from(form.children)
        .filter((div) =>  div.textContent.toLocaleLowerCase().includes(term) )
        .forEach((div) => div.classList.remove("filtered") )
}

input.addEventListener("keyup", () => {
    const term = input.value.trim();
    filterHeroes(term);
}); */