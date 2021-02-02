//Función que pedirá al usuario una fecha en el formato dd/mm/aaaa y 
//devolverá un objeto Date
function pedirFecha() {
    //Expresión regular que representa una fecha en el formato dd/mm/aaaa
    let regex_fecha=/^(([0-2]\d)|(3[01]))\/((0\d)|(1[0-2]))\/\d{4}$/;
    do {
        fecha = prompt("Introduce una fecha válida");
    } while ( !regex_fecha.test(fecha) );
    array_fecha = fecha.split("/");
    return new Date(array_fecha[2], array_fecha[1], array_fecha[0]);
}

alert("Introduce la primera fecha");
let fecha1 = pedirFecha();

alert("Introduce la segunda fecha");
let fecha2 = pedirFecha();

console.log(fecha1);
console.log(fecha2);

//Calculamos el valor absoluto de la diferencia de ambas fechas, para
//que no afecte el orden en el que son introducidas
let diferencia = Math.abs(fecha1.getTime() - fecha2.getTime());
//Pasamos de milisegundos a días
let dias = diferencia/86400000;
alert(`Hay ${dias} días entre las dos fechas introducidas`);