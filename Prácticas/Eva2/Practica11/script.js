text = document.getElementById("text");
boton = document.getElementById("boton");

//Evento que se activa cuando se hace scroll en el texto. Si se llega al
//final del scroll, se muestra el botón
text.addEventListener("scroll", (ev) => {
    if ( text.scrollHeight == text.scrollTop+text.clientHeight) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
});
//Evento que se activa al darle click al botón, que hará desaparecer la capa del texto
boton.addEventListener("click", () => {
    text.style.display = "none";
});