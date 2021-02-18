/*
En esta aplicación almacenaremos dos coockies:
sesion: tendrá el valor true si hemos aceptado las cookies, y false en caso contrario
visitas: tendrá el número de visitas que ha entrado en la página
*/

sesion = getCookie("sesion");

if ( sesion ) { //Si existe sesion, quiere decir que ya hemos aceptado o rechazado las cookies
    if ( sesion == "true" ) {//Si las cookies se han aceptado, aumentamos las visitas y la mostramos
        visitas = getCookie("visitas");
        setCookie("visitas", ++visitas, 60*60*24*365);
        document.getElementById("visitas").innerHTML = visitas;
    } else { //Si las cookies se han rechazado, mostramos un mensaje indicando que no podemos mostrar las visitas
        document.getElementById("visitas").innerHTML = "Has rechazado las cookies y no podemos mostrar las visitas";
    }
} else { //Si no existe sesion, es que acaba de empezar la sesión
    if ( aceptarCookies() ) { //Si aceptamos las cookies, ponemos sesion a true
        setCookie("sesion", "true");
        visitas = getCookie("visitas");
        if ( visitas ) { //Si ya había una cookie visitas, quiere decir que en otra sesión ya las aceptó. En este caso incrementamos las visitas
            setCookie("visitas", ++visitas, 60*60*24*365);
        } else { //Si no existía visitas, quiere decir que es la primera vez que entra en la página, o que durante la última sesión rechazó las cookies. Ponemos las visitas a 1
            visitas = 1;
            setCookie("visitas", visitas, 60*60*24*365);
        }
        document.getElementById("visitas").innerHTML = visitas;
    } else { //Si las cookies son rechazadas, ponemos sesion a false y borramos visitas
        setCookie("sesion", "false");
        setCookie("visitas", 0, 0);
        document.getElementById("visitas").innerHTML = "Has rechazado las cookies y no podemos mostrar las visitas";
    }
}


//Función que pregunta al usuario si desea aceptar las cookies
function aceptarCookies() {
    return confirm("Esta página usa cookies para almacenar el número de visitas que hace cada usuario. Si está conformo con ello, pulse Aceptar. De otro modo la página no realizará su labor y eliminará las cookies existentes.");
}

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