//Pedimos el texto a cifrar
let texto = prompt("Introduce el texto a cifrar");
while ( texto == "" ) {
    alert("El texto no puede estar vacío");
    texto = prompt("Introduce el texto a cifrar");
}

//Si no se ha cancelado el programa, pedimos la clave
if ( texto != null ) {
    clave = prompt("Introduce la clave (valor numérico entre 1 y 100)");
    while ( ( clave < 1 || clave > 100 || isNaN(clave) ) && clave != null ) {
        alert("Valor no válido. Debe introducir un número entre 1 y 100");
        clave = prompt("Introduce la clave");
    }
}

//Si se ha cancelado el programa, se lo comunicamos al usuario
if ( texto == null || clave == null ) {
    alert("Has cancelado el programa");
} else {
    clave = parseInt(clave);
    alert(`Has introducido la clave ${clave}`);
    let cifrado = "";
    //Recorremos el texto carácter a carácter y vamos sumando la clave
    for ( let i=0; i<texto.length; i++ ) {
        cifrado += String.fromCharCode(texto.charCodeAt(i)+clave);
    }

    //Mostramos el texto cifrado
    document.write(cifrado);
}