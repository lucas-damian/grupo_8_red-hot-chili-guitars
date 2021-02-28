window.addEventListener('load', function () {
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
  });