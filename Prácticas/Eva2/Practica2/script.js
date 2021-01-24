function pedirFecha() {
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

let diferencia = Math.abs(fecha1.getTime() - fecha2.getTime());
let dias = diferencia/86400000;
alert(`Hay ${dias} días entre las dos fechas introducidas`);