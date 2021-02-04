//Creamos el cartel, que será un elemento div
cartel = document.createElement("div");

//Le aplicamos todas las reglas CSS para que se muestre como queramos
cartel.innerHTML = "Hola caracola";
cartel.style.backgroundColor = "yellow";
cartel.style.position = "fixed";
cartel.style.padding = "20px";
cartel.style.border = "solid 1px black";

//Insertamos el cartel en el documento
document.body.appendChild(cartel);


//Evento que se produce cuando se mueve el ratón, que cambia la posición del cartel a la del puntero del ratón
document.addEventListener("mousemove", function(ev) {
    cartel.style.top = `${ev.clientY}px`;
    cartel.style.left = `${ev.clientX}px`;
});