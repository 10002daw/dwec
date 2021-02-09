origen = document.getElementById("origen");
destino = document.getElementById("destino");

//Cuando se arrastra el origen, la opacidad pasa al 50%
origen.addEventListener("dragstart", () => {
    origen.style.opacity="50%";
});

//Si se suelta, la opacidad vuelve al 100%
origen.addEventListener("dragend", () => {
    origen.style.opacity="100%";
});

//Si se arrastra el origen al destino, el fondo se vuelve rojo
destino.addEventListener("dragenter", () => {
    destino.style.backgroundColor = "red";
});

//Si se sale del destino, el fondo vuelve a ponerse blanco
destino.addEventListener("dragleave", () => {
    destino.style.backgroundColor = "white";
});

//Si se suelta el origen en el destino, el fondo se cambia a amarillo,
//cambia el texto y desaparece el origen 
destino.addEventListener("drop", () => {
    destino.style.backgroundColor = "yellow";
    destino.innerHTML = "¡Lo has logrado!";
    origen.style.visibility = "hidden";
});

//Eliminamos el comportamiento por defecto de dragover para poder usar el evento drop
//También ponemos el fondo en rojo, ya que en algunos navegadores, al pasar sobre el texto 
//detecta que hemos salido del destino, por lo que se activa ese evento y se pone el fondo blanco
destino.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    destino.style.backgroundColor = "red";
});