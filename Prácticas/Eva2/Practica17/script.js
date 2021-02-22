function temporizador(segundos) {
    return new Promise((resolve, reject) => {
        console.log("inicio promesa");
        let n=0;
        let interval = setInterval(() => {
            if ( n == segundos) {
                clearInterval(interval);
            }
            if ( n == 5 ) {
                resolve("Tiempo concluido");
            } else if ( n == 10 ) {
                resolve("El tiempo no va bien");
            }
            n++;
        },1000);
    });
}

temporizador(3).then(mensaje => {
    console.log(mensaje);
}).catch(error => {
    console.log(error);
});
