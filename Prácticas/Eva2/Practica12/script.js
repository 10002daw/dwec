elementoVelocidad = document.getElementById("velocidad"); //Elemento que contiene la velocidad

//Evento que se activa cuando se presiona una tecla
document.addEventListener("keydown", (ev) => {
    velocidad = elementoVelocidad.innerHTML; //Velocidad actual
    if ( ev.key == "ArrowUp" ) { //Si se pulsa la flecha arriba y la velocidad es menor que 120, se incrementa. Si es mayor, se cambia el color de letra a rojo
        if ( velocidad < 120 ) {
            elementoVelocidad.parentElement.style.color = "black";
            elementoVelocidad.innerHTML = ++velocidad;
        } else {
            elementoVelocidad.parentElement.style.color = "red";
        }
    } else if ( ev.key == "ArrowDown" ) { //Si se pulsa la flecha arriba y la velocidad es mayor que 0, se incrementa. Si es menor, se cambia el color de letra a rojo
        if ( velocidad > 0 ) {
            elementoVelocidad.parentElement.style.color = "black";
            elementoVelocidad.innerHTML = --velocidad;
        } else {
            elementoVelocidad.parentElement.style.color = "red";
        }
    }
});