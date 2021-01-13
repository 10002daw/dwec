/*
En esta implementación represento el tablero como un vector bidimensional donde cada valor representa lo siguiente:
0 -> Casilla vacía
1 -> Casilla adyacente a un barco
2 -> Casilla ocupada por un barco
De esta forma la comprobación que hay que realizar para saber si un barco se puede colocar es muy sencilla, ya
que solo hay que comprobar que no se salga del tablero, y que las casillas que va a ocupar tengan el valor 0.
La parte más difícil es colocar el barco, ya que hay que detectar las casillas adyacentes a un barco para 
señalarlas con el valor 1.
*/

//Definimos e inicializamos a 0 el array que representa el tablero
const tablero = new Array(10);

for ( let i = 0; i<10; i++ ) {
    tablero[i] = new Array(10);
    for ( let j = 0; j<10; j++ ) {
        tablero[i][j] = 0;
    }
}

//Función que imprime el tablero
function imprimirTablero() {
    document.write("<table>");
    for ( let i in tablero ) {
        document.write("<tr>");
        for ( let j in tablero[i] ) {
            if ( tablero[i][j] == 0 ) {
                document.write(`<td></td>`);
            } else if ( tablero[i][j] == 1 ) {
                document.write(`<td class="casillaAdyacente"></td>`);
            } else {
                document.write(`<td class="barco"></td>`);
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

//Función que recibe la posición, la orientación y el tamaño de un barco
//Devuelve true si el barco saldría del tablero, y false en caso contrario
function sale(posicion, horizontal, tamanio) {
    fil = Math.floor(posicion/10);
    col = posicion%10;

    //Primero lo comprobamos para el caso en el que el barco se deba colocar de forma horizontal
    if ( horizontal ) {
        if ( col+tamanio-1 > 9 ) {
            return true;
        }

    //Luego lo comprobamos para un barco colocado en vertical
    } else {
        if ( fil+tamanio-1 > 9 ) {
            return true;
        }
    }

    //Si no se ha devuelto true, es que el barco no se sale, y podemos devolver false
    return false;
}

//Función que recibe la posición, la orientación y el tamaño de un barco
//Devuelve true si el barco chocaría o tocaría a otro, y false en caso contrario
function choca(posicion, horizontal, tamanio) {
    fil = Math.floor(posicion/10);
    col = posicion%10;

    //Hacemos un bucle para hacer la comprobación en cada uno de las casillas que ocuparía el barco
    for ( let i = 0; i < tamanio; i++ ) {

        //Igual que en el caso anterior, primero lo comprobamos para un barco en horizontal
        if ( horizontal ) {
            if ( tablero[fil][col+i] > 0 ) {
                return true;
            }

        //Luego lo comprobamos para un barco en vertical
        } else {
            if ( tablero[fil+i][col] > 0 ) {
                return true;
            }
        }
    }

    //Si no se ha devuelto true, es que el barco no choca con ningún otro, y podemos devolver false
    return false;
}

//Función de coloca en el tablero un barco de tamaño tamanio
function colocarBarco(tamanio) {
    //Calculamos de forma aleatoria la posición y la orientación. Mientras se salga del tablero o
    //choque con otro barco, seguiremos generando posiciones y orientaciones nuevas
    do {
        posicion = parseInt(Math.random()*100);
        horizontal = (parseInt(Math.random()*2) == 0)? true : false;
    } while ( sale(posicion, horizontal, tamanio) || choca(posicion, horizontal, tamanio) );

    //Dividimos la posición en el número de fila y de columna que corresponda
    fil = Math.floor(posicion/10);
    col = posicion%10;

    console.log(`Posicion: (${fil},${col}) Horizontal: ${horizontal} Tamaño: ${tamanio}`);

    //Ahora que tenemos la posición, la orientación y el tamaño, podemos colocarlo en el tablero

    //Hacemos un bucle desde menos 1 hasta tamaño, para así marcar las 3 casillas de delante del
    //barco y las 3 de detrás como adyacentes al barco
    for ( let i = -1; i < tamanio+1; i++ ) {
        //Hacemos un bucle de 3 iteraciones (desde -1 a 1) para marcar las casillas que se 
        //encuentran a cada lado del barco
        for ( let j = -1; j < 2; j++ ) {
            //Dividimos el problema en dos casos: si el barco tiene la orientación horizontal o vertical
            if ( horizontal ) {
                //Si es horizontal, hacemos las siguientes comprobaciones para señalar las casillas en las que se encuentra el barco y las adyacentes
                //col + i >= 0 : Para comprobar que la casilla a señalar no sale por la izquierda del tablero
                //col + i <= 9 : Para comprobar que la casilla a señalar no sale por la derecha del tablero
                //fil + j >= 0 : Para comprobar que la casilla a señalar no sale por arriba del tablero
                //fil + j <= 9 : Para comprobar que la casilla a señalar no sale por debajo del tablero
                if ( col + i >= 0 && col + i <= 9 && fil + j >= 0 && fil + j <= 9 ) { 
                    //Si la casilla que hemos comprobado corresponde con el barco, ponemos un dos
                    //En caso contario (es una casilla adyacente al barco), ponemos un 1
                    tablero[fil+j][col+i] = ( j == 0 && i >= 0 && i < tamanio ) ? 2 : 1;
                }
            } else {
                //Si es vertical, hacemos las siguientes comprobaciones para señalar las casillas en las que se encuentra el barco y las adyacentes
                //col + j >= 0 : Para comprobar que la casilla a señalar no sale por la izquierda del tablero
                //col + j <= 9 : Para comprobar que la casilla a señalar no sale por la derecha del tablero
                //fil + i >= 0 : Para comprobar que la casilla a señalar no sale por arriba del tablero
                //fil + i <= 9 : Para comprobar que la casilla a señalar no sale por debajo del tablero
                if ( col + j >= 0 && col + j <= 9 && fil + i >= 0 && fil + i <= 9 ) { 
                    //Si la casilla que hemos comprobado corresponde con el barco, ponemos un dos
                    //En caso contario (es una casilla adyacente al barco), ponemos un 1
                    tablero[fil+i][col+j] = ( j == 0 && i >= 0 && i < tamanio ) ? 2 : 1;
                }
            }
        }
    }
}

//Colocamos todos los barcos
colocarBarco(5);
colocarBarco(4);
colocarBarco(4);
colocarBarco(3);
colocarBarco(3);
colocarBarco(2);
colocarBarco(2);
//Imprimimos el tablero con los barcos
imprimirTablero();