let posicion; //Variables donde almacenarmos la posición donde colocaremos el texto
let texto; //Texto que contendrá el párrafo

do { //Pedimos el texto
    texto = prompt("Introduce el texto a mostrar");
} while ( texto == "" );

//Si el texto es null no ejecutamos lo siguiente, ya que significa que el usuario ha cancelado el cuadro de texto
if ( texto != null ) {
    do { //Pedimos un número entre el 1 y el 10 mientras no sea null (si es null salimos del bucle)
        posicion = prompt("Introduce la posición (número entero entre el 1 y el 10)");
        console.log(posicion);
    } while ( posicion!=null && (isNaN(posicion) || posicion%1!=0 || posicion<1 || posicion>10) );
}

//Si no se ha cancelado ningún cuadro de texto, insertamos el párrafo
if ( texto!=null && posicion!=null ) {
    insertarParrafo(texto, posicion);
}

//Función que escribe el texto text en la posición pos
function insertarParrafo(text, pos) {
    let lista = document.getElementsByTagName("ol")[0]; //Lista que contienen los párrafos
    let elemento = document.createElement("li"); //Creamos el elemento que insertaremos
    elemento.innerHTML = `<strong>${text}</strong>`; //Introducimos el texto en el nuevo elemento
    if ( pos==10 ) { //Si la posición es 10, lo colocamos al final de la lista
        lista.appendChild(elemento);
    } else { //Si es otra posición, localizamos el elemento siguiente a la posición donde debemos colocarlo, y lo introducimos delante de éste
        let siguienteElemento = lista.children[pos-1]; 
        lista.insertBefore(elemento, siguienteElemento);
    }
}