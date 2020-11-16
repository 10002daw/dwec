const tablero = new Array(10);

for ( let i = 0; i<10; i++ ) {
    tablero[i] = new Array(10);
    for ( let j = 0; j<10; j++ ) {
        tablero[i][j] = 0;
    }
}

function imprimirTablero() {
    document.write("<table border='1'>");
    for ( let i in tablero ) {
        document.write("<tr>");
        for ( let j in tablero[i] ) {
            document.write(`<td>${tablero[i][j]}</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function sale(posicion, orientacion, tamaño) {
    if ( orientacion == 0 ) {
        if ( posicion%10+tamaño-1 > 9 ) {
            return true;
        }
    } else {
        if ( Math.floor(posicion/10)+tamaño-1 > 9 ) {
            return true;
        }
    }
    return false;
}

function choca(posicion, orientacion, tamaño) {
    if ( orientacion == 0 ) {
        if ( posicion%10+tamaño-1 > 9 ) {
            return true;
        }
    } else {
        if ( Math.floor(posicion/10)+tamaño-1 > 9 ) {
            return true;
        }
    }
    return false;
}

function colocarBarco(tamaño) {
    do {
        posicion = parseInt(Math.random()*100);
        orientacion = parseInt(Math.random()*2);
    } while ( sale(posicion, orientacion, tamaño) || choca(posicion, orientacion, tamaño) );

    for ( let i = 0; i < tamaño; i++ ) {
        if ( orientacion == 0 ) {
            tablero[Math.floor(posicion/10)][posicion%10+i]=1;
        } else {
            tablero[Math.floor(posicion/10)+i][posicion%10]=1;
        }
    }
}

colocarBarco(5);
imprimirTablero();