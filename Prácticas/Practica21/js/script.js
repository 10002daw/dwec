/*
El tablero será representado como un array bidimensional con valores enteros.
Cada valor significa lo siguiente:
-1  -> Posición de una mina
0-8 -> Número de minas adyacentes
*/

//Función que inicializa un tablero de filas x columnas vacío
function crearTablero(filas, columnas) {
    let tablero = new Array(filas);

    for ( let i=0; i < filas; i++ ) {
        tablero[i] = new Array(columnas);
        for ( let j = 0; j < columnas; j++ ) {
            tablero[i][j] = 0;
        }
    }

    return tablero;
}

//Función que recibe un tablero y coloca en él un número numMinas de minas
function insertaMinas(tablero, numMinas) {
    let filas = tablero.length;
    let columnas = tablero[0].length;

    let minasColocadas = 0;
    let fil, col;

    while ( minasColocadas < numMinas) {
        fil = parseInt(Math.random()*filas);
        col = parseInt(Math.random()*columnas);
        if ( tablero[fil][col] == 0 ) {
            tablero[fil][col] = -1;
            minasColocadas++;
        }
    }
}

//Función que recibe el tablero y una posición y devuelve el número de minas adyacentes 
function nMinasPos(tablero, fil, col) {
    let nFilas = tablero.length;
    let nColumnas = tablero[0].length;
    
    numMinas = 0;

    if ( fil > 0 ) { //Comprobamos las 3 posiciones sobre la casilla
        if ( tablero[fil-1][col] == -1 ) {
            numMinas++;
        }
        if ( col > 0 ) {
            if ( tablero[fil-1][col-1] == -1 ) {
                numMinas++;
            }
        }
        if ( col < nColumnas-1 ) {
            if ( tablero[fil-1][col+1] == -1 ) {
                numMinas++;
            }
        }
    }

    if ( fil < nFilas-1 ) { //Comprobamos las 3 casillas debajo de la posición
        if ( tablero[fil+1][col] == -1 ) {
            numMinas++;
        }
        if ( col > 0 ) {
            if ( tablero[fil+1][col-1] == -1 ) {
                numMinas++;
            }
        }
        if ( col < nColumnas-1 ) {
            if ( tablero[fil+1][col+1] == -1 ) {
                numMinas++;
            }
        }
    }

    if ( col > 0 ) { //Comprobamos la casilla que se encuentra justo a la izquierda de la posición
        if ( tablero[fil][col-1] == -1 ) {
            numMinas++;
        }
    }

    if ( col < nColumnas-1 ) { //Comprobamos la casilla que se encuentra justo a la derecha de la posición
        if ( tablero[fil][col+1] == -1) {
            numMinas++;
        }
    }
    
    return numMinas;
}

function minasCerca(tablero) {
    let nFilas = tablero.length;
    let nColumnas = tablero[0].length;

    for ( let i=0; i < nFilas; i++ ) {
        for ( let j = 0; j < nColumnas; j++ ) {
            if ( tablero[i][j] != -1 ) {
                tablero[i][j] = nMinasPos(tablero, i, j);
            }
        }
    }
}

function dibujaTablero(tablero) {
    let nFilas = tablero.length;
    let nColumnas = tablero[0].length;

    document.write("<table border='1'>");

    for ( let i = 0; i < nFilas; i++ ) {
        document.write("<tr>");
        for ( let j = 0; j < nColumnas; j++ ) {
            if ( tablero[i][j] == -1 ) {
                document.write(`<td class="mina"></td>`);
            } else if ( tablero[i][j] > 0 ) {
                document.write(`<td>${tablero[i][j]}</td>`);
            } else {
                document.write(`<td></td>`);
            }
            
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

const tablero = crearTablero(16,16);
insertaMinas(tablero, 40);
minasCerca(tablero);
dibujaTablero(tablero);
console.log(tablero);