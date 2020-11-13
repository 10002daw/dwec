let acumulador=0, contador=0;

do {
    num = prompt("Introduce un número");
    acumulador+=num;
    contador++;
} while ( num!=0 );

alert(`La media es: ${acumulador}`);