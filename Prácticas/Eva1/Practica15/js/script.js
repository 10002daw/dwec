//Función que recibe un string y devuelve el mismo en minúsculas, sin signos de puntuación 
//(quitando también los espacios) ni de acentuación
function prepararString(str) {
    //Constante con los signos de puntuación que quitaremos
    const CAR_PUNT = ",.;: ()[]{}-_¡!¿?/\"'`´";

    //Pasamos todas las letras a minúculas
    let res = str.toLowerCase();

    //Quitamos todos los signos de puntuación
    for ( car of CAR_PUNT ) {
        //Como replace solo reemplaza la primera ocurrencia encontrada, debemos usarla hasta 
        //que no haya ese carácter en la cadena
        while ( res.includes(car) ) {
            res = res.replace(car,"");
        }
    }

    //Mapa con las letras acentuadas que vamos a reemplazar
    const CAR_ACENT = new Map ([
        ["á","a"],
        ["à","a"],
        ["é","e"],
        ["è","e"],
        ["í","i"],
        ["ì","i"],
        ["ó","o"],
        ["ò","o"],
        ["ú","u"],
        ["ù","u"],
        ["ü","u"]
    ]);
    
    //Reemplazamos las letras acentuadas
    for ( [k,v] of CAR_ACENT ) {
        while ( res.includes(k) ) {
            res = res.replace(k,v);
        }
    }

    return res;
}

//Función que recibe un string y devuelve false si contiene números, y true en caso contrario
function validarString(str) {
    const NUMS = "0123456789";

    for ( let i=0; i<str.length; i++ ) {
        if ( NUMS.includes(str.charAt(i)) ) {
            return false;
        }
    }
    return true;
}

//Función que recibe un string ya preparado y devuelve true si es un palíndromo, o false en 
//caso contrario
function esPalindromo(str){
    //i irá desde el principio del string hasta la mitad, y j desde el final a la mitad
    for ( let i=0, j=str.length-1; i<=j; i++, j-- ) {
        if ( str.charAt(i) != str.charAt(j) ) {
            return false;
        }
    }
    return true;
}

//Variable booleana donde guardaremos la información de que el usuario haya cancelado un cuadro
let cancelar = false;
//Variable booleanas donde indicaremos si la frase ha pasado la validación (no tiene números)
let valida = true;

//Pedimos frases hasta que sea válida (no contenga números) 
do {
    frase = prompt("Introduce la frase");

    //Si el usuario cancela el cuadro de texto o introduce una cadena vacía, se cancela la ejecución
    if ( frase == null || frase == "" ) {
        cancelar = true;
        alert("Has cancelado la ejecución");
        break;
    }
    
    if ( !(validada = validarString(frase)) ) {
        alert("La frase no puede contener números")
    }

} while ( !validada );

//Si el programa no se ha cancelado, comprobamos si la frase es un palíndromo o no
if ( !cancelar ) {
    if ( esPalindromo(prepararString(frase)) ) {
        alert(`La frase introducida es un palíndromo`);
    } else {
        alert(`La frase introducida no es un palíndromo`);
    }
}