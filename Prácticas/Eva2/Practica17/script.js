import { temporizador } from "./modulo.js";

let capa = document.getElementById("capa");

//Llamamos a la función importada con el tiempo que queramos
temporizador(5000).then(mensaje => {
    capa.innerHTML = mensaje;
}).catch(error => {
    capa.style.color = "red";
    capa.innerHTML = error;
});