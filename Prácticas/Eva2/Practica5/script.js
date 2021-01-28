let posicion;
let texto;

do {
    texto = prompt("Introduce el texto a mostrar");
} while ( texto=="" );

do {
    posicion = prompt("Introduce la posición (número entero entre el 1 y el 10)");
} while ( isNaN(posicion) || posicion%1!=0 || posicion<1 || posicion>10 );

let lista = document.getElementsByTagName("ol")[0];
let elemento = document.createElement("li");
elemento.innerHTML = `<strong>${texto}</strong>`;
if ( posicion==10 ) {
    lista.appendChild(elemento);
} else {
    let siguienteElemento = lista.children[posicion-1];
    lista.insertBefore(elemento, siguienteElemento);
}