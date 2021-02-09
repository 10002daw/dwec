capa = document.getElementById("capa"); //Capa que muestra el texto "Cargando..."
imagenes = document.querySelectorAll("img"); //Todos los elementos de las imágenes
//A cada imagen menos a la última, le agregamos un evento que se producirá cuanso termine
//la transición, y que hará que se inicie la transición de la imagen siguiente
//Esto hará que las imágenes aparezcan de una en una desde la primera
for ( let i=0; i<imagenes.length-1; i++ ) {
    imagenes[i].addEventListener("transitionend", (ev) => {
        imagenes[i+1].classList.add("transition");
    });
}
//Cuando se carge la página completa, es decir, todas las imágenes,
//ocultamos el texto e iniciamos la transición de la primera imagen para mostrarla
window.addEventListener("load", (ev) => {
    capa.style.display = "none";
    imagenes[0].classList.add("transition");
});