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

crearTabla();
document.write("<br>");
crearTabla(20,10);
document.write("<br>");
crearTabla(5,4,"green");