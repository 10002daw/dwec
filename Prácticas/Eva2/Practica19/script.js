posActual = 0;//Posición del elemento que se está mostrando. Empezaremos mostrando el primero (la posición 0)

document.getElementById("anterior").addEventListener("click", () => {
    cargarDatos(posActual-1)}
);
document.getElementById("siguiente").addEventListener("click", () => {
    cargarDatos(posActual+1)}
);

//Cargamos en el formulario los datos del primer elemento
cargarDatos(0);

//Función que recibe la posición del elemento a cargar en el formulario
function cargarDatos(posicion) { 
    fetch("form.json")
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json();
        } else {
            throw new Error("No se pudo acceder a los datos");
        }
    })
    .then(datos => {
        //Si la posición es -1, la cambiamos al último elemento para dar la vuelta
        if ( posicion < 0 ) {
            posicion = datos.length-1;
        //Si la posición es mayor al número de elementos, la cambiamos al primer elemento para dar la vuelta
        } else if ( posicion >= datos.length ) {
            posicion = 0;
        }
        if (posicion < datos.length) {
            document.getElementById("dni").value = datos[posicion].dni;
            document.getElementById("nombre").value = datos[posicion].nombre;
            document.getElementById("direccion").value = datos[posicion].direccion;
            document.getElementById("ciudad").value = datos[posicion].ciudad;
            document.getElementById("email").value = datos[posicion].email;
            posActual = posicion;
        }
    })
    .catch(error => {
        console.log("Error: " + error);
    });  
}