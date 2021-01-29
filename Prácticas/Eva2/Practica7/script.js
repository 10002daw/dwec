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