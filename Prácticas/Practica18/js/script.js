/*
Función que calcula el término n de Fibonacci de forma recursiva
Tienes dos casos base: 0 y 1. En ambos casos debe devolver el propio número
Si no es ninguno de los casos base, devuelve la suma del término n-1 y n-2
*/
function fibonacciRecursivo(n) {
    return  ( n <= 1 ) ? n : ( fibonacciRecursivo(n-1) + fibonacciRecursivo(n - 2) );
}

/*
Función que calcula el término n de Fibonacci de forma iterativa
*/
function fibonacciIterativo(n) {
    let x = 0;//Término actual
    let y = 1;//Término siguiente

    for ( let i = 0; i < n; i++ ) {
        [x,y] = [y,x];//Movemos el término siguiente al actual
        y += x;//Calculamos el término siguiente
    }

    return x;
}

let n = prompt("Introduce el término de la Sucesión de Fibonacci a calcular (número mayor o igual a 0)");

document.write(`El término número ${n} de la Sucesión de Fibonacci usando el algoritmo recursivo es ${fibonacciRecursivo(n)}`);
document.write("<br>");
document.write(`El término número ${n} de la Sucesión de Fibonacci usando el algoritmo iterativo es ${fibonacciIterativo(n)}`);