/*  Función que realiza una partida del juego de adivinar un número.
    Devuelve false si se ha cancelado un cuadro, por lo que el juego debe terminarse.
    Devuelve true si se ha acertado el número.
*/
function juego() {
    // Se genera el número a adivinar y se inicializa el número de intentos a 0.
    let numSecreto = parseInt(Math.random()*1000+1);
    let intentos = 0;

    // Bucle que pedirá un número mientras no se haya adivinado el número secreto.
    do {
        num = prompt("Introduce un número");
        // Si prompt devuelve null, quiere decir que se ha pulsado el botón de cancelar, por lo que salimos
        // de la función y devolvemos false.
        if ( num == null ) {
            document.write("El juego se ha cancelado.");
            return false;
        // Si el usuario introduce un valor que no sea numérico o un valor número que no esté entre 1 y 1000,
        // le avisamos mostrando un mensaje.
        } else if ( isNaN(num) || num < 1 || num > 1000) {
            window.alert("El valor introducido no es un número válido");
        // Si se ha introducido un valor númerico entre 1 y 1000, sumamos un intento y comprobamos si ha acertado.
        } else {
            intentos++;
            // Si ha adivinado el número, se lo comunicamos al usuario, y devolvemos true para salir de la función.
            if ( num == numSecreto ) {
                window.alert(`¡Enhorabuena! Has adivinado el numero ${numSecreto} en ${intentos} intentos`);
                document.write(`Has adivinado el numero ${numSecreto} en ${intentos} intentos<br>`);
                return true;
            // Si no ha acertado, comprobamos si el número a adivinar es mayor o menos al que ha introducido.
            } else if ( numSecreto < num ) {
                window.alert("Has fallado, el número que buscas es menor al que has introducido");
            } else {
                window.alert("Has fallado, el número que buscas es mayor al que has introducido");
            }
        }
    } while ( num != numSecreto );
}

// Ejecutamos la función juego() mientras no se haya cancelado un cuadro, y mientras el usuario quiera
// iniciar otra partida.
while ( juego() && confirm("Quieres iniciar otra partida?") );