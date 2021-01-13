const numeros = []; //Array de números introducidos
let num; //Último número introducido por el usuario

num = prompt("Introduce un número");

//Pedimos números mientras no se pulse en cancelar y mientras no se
//introduzca un 0. Si se introduce la cadena vacía (que JS considera
//que es 0) también debe pedir otro número
while ( num != null && (num != 0 || num == "") ) {
    if ( !isNaN(parseInt(num)) ) {//Si se introduce un número
        numeros.push(parseInt(num));
    } else {
        alert("Debes introducir un número");
    }    
    
    num = prompt("Introduce otro número");
}

if ( num == null ) {
    alert("Has cancelado la ejecución del programa");
} else if ( numeros.length == 0 ) {
    alert("No has introducido ningún número");
} else {
    //Sumamos todos los elementos del array y dividimos entre
    //la longitud del mismo
    let suma = 0;
    for ( numero of numeros) {
        suma += numero;
    }
    media = suma/numeros.length;

    alert(`La media aritmética es ${media}`);
}