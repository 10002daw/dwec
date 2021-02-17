formulario = document.forms[0];

if ( getCookie("nombre") ) { //Si hay una cookie llamada nombre, es que se han guardado los datos del formulario anteriormente
    if ( confirm("¿Deseas cargar los datos guardados?") ) { //Si el usuario acepta, cargamos los datos de las cookies en el formulari
        formulario.nombre.value = getCookie("nombre");
        formulario.email.value = getCookie("email");
        formulario.tel.value = getCookie("tel");
        formulario.pais.value = getCookie("pais");
    }
}

//Evento que se lanza al mandar el formulario, que preguntará al usuario si desea almacenar los datos del formulario,
//y si acepta se almacenarán en cookies durante 7 días
formulario.addEventListener("submit", (ev) => {
    if( confirm("¿Quieres guardar esta información?") ) {
        setCookie("nombre", formulario.nombre.value, 7*24*60*60);
        setCookie("email", formulario.email.value, 7*24*60*60);
        setCookie("tel", formulario.tel.value, 7*24*60*60);
        setCookie("pais", formulario.pais.value, 7*24*60*60);
    }
});

//Función que recibe el nombre de una cookie. Si existe, devuelve su valor, en caso contrario, devuelve null
function getCookie(nom) {
    let arrayCookie = document.cookie.split("; ");
    let cookies = new Array();
    for (let cookie of arrayCookie) {
        let [nombre, valor] = cookie.split("=");
        if ( nombre == nom ) {
            return valor;
        }
    }
    return null;
}

//Función que recibe el nombre y el valor de una cookie para crearla o modificarla. También puede recibir un tercer parámetro, que será el tiempo que durará en el navegador
function setCookie(nombre, valor, maxAge = null) {
    console.log(nombre+valor+maxAge);
    let cookie = nombre+"="+valor;
    if ( maxAge != null ) {
        cookie += `; max-age=${maxAge}`;
    }
    document.cookie = cookie;
}