function contarPalabras(parrafo) {
    //Borramos espacios al principio y al final del párrafo
    texto = parrafo.innerHTML.trim();

    //Sustituimos espacios múltiples por un único espacio
    const regex_espacios = /\s+/;
    texto = texto.replace(regex_espacios, " ");

    //Dividimos el párrafo en palabras
    let palabras = texto.split(" ");

    //Devolvemos el número de palabras
    return palabras.length;
}

let parrafos = document.getElementsByTagName("p");

let palabras = 0;

//Contamos el número de palabras
for ( let parrafo of parrafos ) {
    palabras += contarPalabras(parrafo);
    console.log(`${contarPalabras(parrafo)} palabras`);
}

//Creamos el párrafo con el número de palabras y lo introducimos al principio de la página
let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = `<strong>${palabras} palabras</strong>`;
document.body.insertBefore(nuevoParrafo, parrafos[0]);