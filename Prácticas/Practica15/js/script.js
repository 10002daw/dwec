function prepararString(str) {
    const CAR_PUNT = ",.;: ()[]{}-_¡!¿?/\"'`´";

    //Pasamos todas las letras a minúculas
    let res = str.toLowerCase();

    //Quitamos todos los signos de puntuación
    for ( car of CAR_PUNT ) {
        //Como replace solo reemplaza la primera ocurrencia encontrada, debemos usarla hasta que no haya ese caracter en la cadena
        while ( res.includes(car) ) {
            res = res.replace(car,"");
        }
    }

    //Quitamos los signos de acentuación
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
    
    for ( [k,v] of CAR_ACENT ) {
        while ( res.includes(k) ) {
            res = res.replace(k,v);
        }
    }

    return res;
}

cadena = "¿Son mulas o cívicos alumnos?";
console.log(prepararString(cadena));