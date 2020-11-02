let numSecreto, num, intentos;
do {
    numSecreto = parseInt(Math.random()*1000+1);
    intentos = 0;
    do {
        num = prompt("Introduce un número");
        if ( num == null ) {
            document.write("El juego se ha cancelado.");
        } else if ( isNaN(num) || num < 1 || num > 1000) {
            window.alert("El valor introducido no es un número válido");
        } else {
            intentos++;
            if ( num == numSecreto ) {
                window.alert(`¡Enhorabuena! Has adivinado el numero ${numSecreto} en ${intentos} intentos`);
                document.write(`Has adivinado el numero ${numSecreto} en ${intentos} intentos<br>`);
            } else if ( numSecreto < num ) {
                window.alert("Has fallado, el número que buscas es menor al que has introducido");
            } else {
                window.alert("Has fallado, el número que buscas es mayor al que has introducido");
            }
        }
    } while ( num != numSecreto && num != null );
} while ( num != null && confirm("Quieres iniciar otra partida?") );
