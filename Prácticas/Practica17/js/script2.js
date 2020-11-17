const tablero = new Array(10);

for ( let i = 0; i<10; i++ ) {
    tablero[i] = new Array(10);
    for ( let j = 0; j<10; j++ ) {
        tablero[i][j] = false;
    }
}

function imprimirTablero() {
    document.write("<table>");
    for ( let i in tablero ) {
        document.write("<tr>");
        for ( let j in tablero[i] ) {
            if ( !tablero[i][j] ) {
                document.write(`<td></td>`);
            } else if ( tablero[i][j] ) {
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

function chocaLados(posicion, orientacion, tamanio) {
    fil = Math.floor(posicion/10);
    col = posicion%10;

    if ( orientacion == 0 ) {

        for ( let i = 0; i < tamanio; i++ ) {
            if ( ( fil-1 >= 0 && tablero[fil-1][col+i] ) || 
                 ( fil+1 <= 9 && tablero[fil+1][col+i] ) ) {
                return true;
            }
        }

    } else {

        for ( let i = 0; i < tamanio; i++ ) {
            if ( ( col-1 >= 0 && tablero[fil+i][col-1] ) || 
                 ( col+1 <= 9 && tablero[fil+i][col+1] ) ) {
                return true;
            }
        }

    }
    
    return false;
}

function chocaExtremos(posicion, orientacion, tamanio) {
    fil = Math.floor(posicion/10);
    col = posicion%10;
    console.log(`Fil: ${fil} Col: ${col} Tam: ${tamanio}`);
    if ( orientacion == 0 ) {

        if ( col-1 >= 0 ) {
            if ( ( fil-1 >= 0 && tablero[fil-1][col-1] ) ||
                 ( tablero[fil][col-1] ) ||
                 ( fil+1 <= 9 && tablero[fil+1][col-1]) ) {
                return true;
            }
        } 

        if ( col+tamanio <= 9 ) {
            if ( ( fil-1 >= 0 && tablero[fil-1][col+tamanio] ) ||
                 ( tablero[fil][col+tamanio] ) ||
                 ( fil+1 <= 9 && tablero[fil+1][col+tamanio]) ) {
                return true;
            }
        }

    } else {

        if ( fil-1 >= 0 ) {
            if ( ( col-1 >= 0 && tablero[fil-1][col-1] ) ||
                 ( tablero[fil-1][col] ) ||
                 ( col+1 <= 9 && tablero[fil-1][col+1]) ) {
                return true;
            }
        } 

        if ( fil+tamanio <= 9 ) {
            if ( ( col-1 >= 0 && tablero[fil+tamanio][col-1] ) ||
                 ( tablero[fil+tamanio][col] ) ||
                 ( col+1 <= 9 && tablero[fil+tamanio][col+1]) ) {
                return true;
            }
        } 

    }
    return false;
}

function casillaOcupada(posicion) {
    fil = Math.floor(posicion/10);
    col = posicion%10;

    return tablero[fil][col];
}

function choca(posicion, orientacion, tamanio) {
    return chocaLados(posicion, orientacion, tamanio) || chocaExtremos(posicion, orientacion, tamanio) || casillaOcupada(posicion);
}

function colocarBarco(tamanio) {
    do {
        posicion = parseInt(Math.random()*100);
        orientacion = parseInt(Math.random()*2);
    } while ( sale(posicion, orientacion, tamanio) || choca(posicion, orientacion, tamanio) );
    //console.log(`Posicion: ${posicion} Orientación: ${orientacion}`);
    fil = Math.floor(posicion/10);
    col = posicion%10;

    for ( let i = 0; i < tamanio; i++ ) {
        if ( orientacion == 0 ) {
            tablero[fil][col+i] = true;
        } else {
            tablero[fil+i][col] = true;
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
//colocarBarco(1);
//colocarBarco(1);
imprimirTablero();