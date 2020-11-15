//Pedimos la clave
let clave = prompt("Introduce la clave (valor numérico entre 1 y 1000000)");
while ( ( clave < 1 || clave > 1000000 || isNaN(clave) ) && clave != null ) {
    alert("Valor no válido. Debe introducir un número entre 1 y 1000000");
    clave = prompt("Introduce la clave");
}

//Si no se ha cancelado, pedimos el texto
let texto;
if ( clave != null ) {
    texto = prompt("Introduce el texto a cifrar");
    while ( texto == "" ) {
        alert("El texto no puede estar vacío");
        texto = prompt("Introduce el texto a cifrar");
    }
}

//Si se ha cancelado el programa, se lo comunicamos al usuario
if ( clave == null || texto == null ) {
    alert("Has cancelado el programa");
} else {
    alert(`Has introducido la clave ${clave}`);
    let cifrado = "";
    //Recorremos el texto carácter a carácter y vamos sumando la clave
    for ( let i=0; i<texto.length; i++ ) {
        cifrado += String.fromCharCode(texto.charCodeAt(i)+parseInt(clave[i%clave.length]));
    }

    //Mostramos el texto cifrado
    document.write(cifrado);
}