const minus = "aáàbcçdeéèfghiìíjklmnñoóòpqrstuùúüvwxyz";
const mayus = "AÁÀBCÇDEÉÈFGHIÌÍJKLMNÑOÓÒPQRSTUÙÚÜVWXYZ";
const num = "0123456789";

let usuario=password="";

//Flags para indicar si contiene alguna letra minúscula, mayúcula, número o símbolo
let tieneMinus, tieneMayus, tieneNum, tieneSimb;

do {
    usuario = prompt("Escribe su nombre de usuario (solo puede estar formada por letras minúsculas y números)");

    //Si se ha cancelado el cuadro de entrada de texto, salimos del bucle para detener la ejecución
    if ( usuario == null ) {
        break;
    }

    tieneMinus=tieneMayus=tieneNum=tieneSimb=false;

    //Recorremos la cadena de texto, y marcamos el flag si contiene el elemento correspondiente
    for ( let i=0; i<usuario.length; i++ ) {
        if ( minus.includes(usuario.charAt(i)) ) {
            tieneMinus = true;
        } else if ( mayus.includes(usuario.charAt(i)) ) {
            tieneMayus = true;
        } else if ( num.includes(usuario.charAt(i)) ) {
            tieneNum = true;
        } else {
            tieneSimb = true;
        }
    }    
//Si no al menos un número y una letra mayúcula, o tiene alguna letra mayúscula o símbolo, volvemos a solicitarlo
} while ( !tieneMinus || tieneMayus|| !tieneNum || tieneSimb );

//Si no se ha cancelado el programa, pediremos la contraseña
if ( usuario != null ) {
    do {
        password = prompt("Escribe su contraseña (debe tener una letra minúscula, una mayúscula, un número y un símbolo)");

        if ( password == null ) {
            break;
        }

        tieneMinus=tieneMayus=tieneNum=tieneSimb=false;

        //Como con el nombre de usuario, recorremos la cadena de texto, y marcamos el flag si contiene el elemento correspondiente
        for ( let i=0; i<password.length; i++ ) {
            if ( minus.includes(password.charAt(i)) ) {
                tieneMinus = true;
            } else if ( mayus.includes(password.charAt(i)) ) {
                tieneMayus = true;
            } else if ( num.includes(password.charAt(i)) ) {
                tieneNum = true;
            } else {
                tieneSimb = true;
            }
        }    
    //Si falta alguno de los 4 tipos de elementos, volvemos a solicitarla
    } while ( !tieneMinus || !tieneMayus || !tieneNum || !tieneSimb );
}

if ( usuario == null || password == null ) { //Si se ha cancelado la ejecución
    alert("Has detenido la ejecución del programa cancelando algún cuadro de texto");
} else { //Si se ha introducido el nombre de usuario y la contraseña correctamente
    alert("La información se ha almacenado correctamente");
    document.write(`Nombre de usuario: ${usuario}<br>`);
    document.write(`Password: ${password}`);
}