let texto = prompt("Introduce el texto a cifrar");
let clave;

clave = prompt("Introduce la clave (valor numérico entre 1 y 100)");
while ( ( clave < 1 || clave > 100 || isNaN(clave) ) && clave != null ) {
    alert("Valor no válido. Debe introducir un número entre 1 y 100");
    clave = prompt("Introduce la clave");
}

if ( clave == null ) {
    alert("Has cancelado el programa");
} else {
    alert(`Has introducido la clave `);
}