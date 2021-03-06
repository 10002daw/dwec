//Función que pedirá cierto dato y lo devolverá. Recibe por parámetro un mensaje, que se le mostrará al usuario,
//y una expresión regular, que deberá cumplir el dato introducido. 
function pedirDato(mensaje, regex) {
    let dato = prompt(mensaje);
    while ( !regex.test(dato) ) {
        alert("Dato incorrecto.");
        dato = prompt(mensaje);
    }
    return dato;
}

//Expresión regular para el nombre de usuario
let regex_nombre = /^[a-z0-9]{8,12}$/;
//Expresión regular para la contraseña
let regex_passwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])(\S{8,12})$/;

//Pedimos los datos necesarios
let nombre = pedirDato(
    "Escribe un nombre de usuario. Debe estar formado por letras minúsculas y números, y tener entre 8 y 12 caracteres.",
    regex_nombre);

let passwd = pedirDato(
    "Escribe una contraseña. Debe tener una longitud de entre 8 y 12 caraacteres, y debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo.",
    regex_passwd);

//Mostramos la información introducida
document.write("<h1>Datos introducidos correctamente</h1>");
document.write(`<p>Nombre de usuario: ${nombre}</p>`);
document.write(`<p>Contraseña: ${passwd}</p>`);