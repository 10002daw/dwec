//Función que recorre los hijos de un elemento y muestra por consola sus atributos
//Recursivamente, también recorrerá los hijos de esos elementos
//El caso base se dará cuando el elemento no tenga hijos, pero esta condición ya está implicita en el bucle for of
function recorrerHijos(elemento) {
    for ( let hijo of elemento.children ) {
        str = hijo.nodeName;
        for ( let atributo of hijo.attributes) {
            str += ` ${atributo.name}="${atributo.value}"`;
        }
        console.log(str);
        recorrerHijos(hijo);
    }
}

recorrerHijos(document);