const minus = "aáàbcçdeéèfghiìíjklmnñoóòpqrstuùúüvwxyz";
const mayus = "AÁÀBCÇDEÉÈFGHIÌÍJKLMNÑOÓÒPQRSTUÙÚÜVWXYZ";
const num = "0123456789";

let usuario=password="";

do {
    usuario = prompt("Escribe su nombre de usuario (solo puede estar formada por letras minúsculas y números)");
    let tieneMinus=tieneMayus=tieneNum=tieneSimb=false;
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
} while ( tieneMayus || tieneSimb );

do {
    password = prompt("Escribe su contraseña (debe tener una letra minúscula, una mayúscula, un número y un símbolo)");
    let tieneMinus=tieneMayus=tieneNum=tieneSimb=false;
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
} while ( !tieneMinus || !tieneMayus || !tieneNum || !tieneSimb );

document.write(`Nombre de usuario: ${usuario}<br>`);
document.write(`Password: ${password}`);