function pedirDato(mensaje, regex) {
    let dato = prompt(mensaje);
    while ( !regex.test(dato) ) {
        dato = prompt(mensaje);
    }
    return dato;
}

let regex_nombre = /^[a-z0-9]{8,12}$/;
let regex_passwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])(\S{8,12})$/;

let nombre = pedirDato(
    "Escribe un nombre de usuario. Debe estar formado por letras minúsculas y números, y tener entre 8 y 12 caracteres.",
    regex_nombre);

let passwd = pedirDato(
    "Escribe una contraseña. Debe tener una longitud de entre 8 y 12 caraacteres, y debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo.",
    regex_passwd);