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
            if ( tablero[i][j] == 0 ) {
                document.write(`<td></td>`);
            } else if ( tablero[i][j] == 1 ) {
                document.write(`<td class="zonaSegura"></td>`);
            } else {
                document.write(`<td class="barco"></td>`);
            }
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
    fil = Math.floor(posicion/10);
    col = posicion%10;
    for ( let i = 0; i < tamaño; i++ ) {
        if ( orientacion == 0 ) {
            if ( tablero[fil][col+i] > 0 ) {
                return true;
            }
        } else {
            if ( tablero[fil+i][col] > 0 ) {
                return true;
            }
        }
    }
    return false;
}

function colocarBarco(tamaño) {
    do {
        posicion = parseInt(Math.random()*100);
        orientacion = parseInt(Math.random()*2);
    } while ( sale(posicion, orientacion, tamaño) || choca(posicion, orientacion, tamaño) );
    console.log(`Posicion: ${posicion} Orientación: ${orientacion}`);
    fil = Math.floor(posicion/10);
    col = posicion%10;
    for ( let i = -1; i < tamaño+1; i++ ) {
        for ( let j = -1; j < 2; j++ ) {
            if ( orientacion == 0 ) {
                if ( col + i >= 0 && col + i <= 9 && fil + j >= 0 && fil + j <= 9 ) { 
                    tablero[fil+j][col+i] = ( j == 0 && i >= 0 && i < tamaño ) ? 2 : 1;
                }
            } else {
                if ( col + j >= 0 && col + j <= 9 && fil + i >= 0 && fil + i <= 9 ) { 
                    tablero[fil+i][col+j] = ( j == 0 && i >= 0 && i < tamaño ) ? 2 : 1;
                }
            }
        }
    }
}
colocarBarco(5);
colocarBarco(4);
colocarBarco(4);
colocarBarco(3);
colocarBarco(3);
colocarBarco(2);
colocarBarco(2);
imprimirTablero();