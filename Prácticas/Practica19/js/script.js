/*
Función que imprime una tabla de 'filas'  número de filas (10 por defecto),
'columnas' número de columnas (4 por defecto) y con borde de color 'color'
(negro por defecto)
*/
function crearTabla(filas=10, columnas=4, color="black") {
    let tabla = `<table style="border-color: ${color};">\n`;
    for ( let i=0; i < filas; i++ ) {
        tabla += "<tr>";
        for ( let j=0; j < columnas; j++ ) {
            tabla += `<td style="border-color: ${color};"></td>\n`;
        }
        tabla += "</tr>";
    }
    tabla +="</table>\n";

    document.write(tabla);
}

crearTabla(); //Crea una tabla de 10 filas, 4 columnas y color negro
document.write("<br>");
crearTabla(20,10); //Crea una tabla de 20 filas, 10 columnas y color negro
document.write("<br>");
for ( let i=0; i < 10; i++) {
    crearTabla(5,4,"green"); //Crea una tabla de 5 filas, 4 columnas y color verde
    document.write("<br>");
}