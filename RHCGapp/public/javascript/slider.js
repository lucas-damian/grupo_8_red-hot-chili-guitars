window.addEventListener('load', function () {
    console.log('el contenido ha cargado!');
    var imagenes = [];
    imagenes[0] = './img/sliders/slider_00.jpg';
    imagenes[1] = './img/sliders/slider_01.jpg';
    imagenes[2] = './img/sliders/slider_02.jpeg';
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