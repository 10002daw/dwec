//Función que recibe un número de milisegundos y devuelve una promesa
//que se cumplirá si pasa ese tiempo.
export function temporizador(ms) {
    return new Promise((resolve, reject) => {
        //Si pasan ms milisegundos, la promesa se resuelve
        setTimeout(() => {
            resolve("Tiempo concluido");
        }, ms);
        //Si pasan el doble de ms milisengudos, la promesa se rechaza
        setTimeout(() => {
            reject("El tiempo no va bien");
        }, ms*2);
    });
}