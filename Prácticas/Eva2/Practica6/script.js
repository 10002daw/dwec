function contarPalabras(parrafo) {
    //Borramos espacios al principio y al final del párrafo
    texto = parrafo.innerHTML.strim();

    //Sustituimos espacios múltiples por un único espacio
    const regex_espacios = /\s+/;
    parrafo = parrafo.replace(regex_espacios, " ");

    //Dividimos el párrafo en palabras
    let palabras = parrafo.split(" ");

    //Devolvemos el número de palabras
    return palabras.length;
}

let parrafos = document.getElementsByTagName("p");

let palabras = 0;

for ( let [posicion,parrafo] of parrafos ) {
    console.log(`El párrafo ${posicion} tiene ${contarPalabras(parrafo)} palabras`);
}