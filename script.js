import { barcelona, roma, paris, londres } from "./ciudades.js";

//obtener los elementos del DOM
let enlances = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

//Agregar un evento CLICK a cada enlance
enlances.forEach(function (enlance) {
  enlance.addEventListener("click", function () {
    //remover la clase "active" de todos los enlaces
    enlances.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //Agregar la clase "active" al enlace actual
    this.classList.add("active");

    //Obtener el contenido correspondiente según el enlace
    let contenido = obtenerContenido(this.textContent);

    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

//Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
