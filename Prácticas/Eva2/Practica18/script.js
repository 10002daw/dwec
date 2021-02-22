fetch("form.json")
.then(respuesta => {
    if (respuesta.ok) {
        return respuesta.json();
    } else {
        throw new Error("No se pudo acceder a los datos");
    }
})
.then(miJSON => {
    let form = document.getElementById("form");
    //Una vez tenemos el objeto json, por cada campo creamos un label y un input, y los introducimos en el formulario
    for ( let campo in miJSON[0] ) {
        let label = document.createElement("label");
        label.htmlFor = campo;
        label.innerHTML = campo;
        let input = document.createElement("input");
        input.id = campo;
        input.name = campo;
        input.value = miJSON[0][campo];
        form.appendChild(label);
        form.appendChild(input);
    }
})
.catch(error => {
    console.log("Error: " + error);
});  