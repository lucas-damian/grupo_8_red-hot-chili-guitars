const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];


const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");


slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function  Next(){
  let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500)
}

function  Prev(){
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500)
}


btnRight.addEventListener('click', function(){
  Next();
})

btnLeft.addEventListener('click', function(){
  Prev();
})

setInterval(function(){
  Next();
}, 6000)


console.log("")








/* const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function  Next(){
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst); 
    slider.style.marginLeft = "-100%"
  }, 500)
}

function  Prev(){
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast); 
    slider.style.marginLeft = "-100%"
  }, 500)
}

btnRight.addEventListener('click', function(){
  Next()
});

btnLeft.addEventListener('click', function(){
  Prev()
});

setInterval(function(){
  Next()
}, 5000);
 */







/* window.addEventListener('load', function () {
    console.log('el contenido ha cargado!');
    var imagenes = ["./img/sliders/slider_00.jpg","./img/sliders/slider_01.jpg","./img/sliders/slider_02.jpg"];

    var indiceImagenes = 0;
    function cambiarImagenes() {
      document.slider.src = imagenes[indiceImagenes];
      if (indiceImagenes < 2) {
        indiceImagenes++;
      } else {
        indiceImagenes = 0;
      }
    }
    setInterval(cambiarImagenes, 5000)
  }); */