function fibonacciRecursivo(n) {
    return  ( n <= 1 ) ? n : ( fibonacciRecursivo(n-1) + fibonacciRecursivo(n - 2) );
}

function fibonacciIterativo(n) {
    let x = 0;
    let y = 1;

    for ( let i = 0; i < n; i++ ) {
        [x,y] = [y,x];
        y += x;
    }

    return x;
}

let n = prompt("Introduce el término de la Sucesión de Fibonacci a calcular (número mayor o igual a 0)");

document.write(`El término número ${n} de la Sucesión de Fibonacci usando el algoritmo recursivo es ${fibonacciRecursivo(n)}`);
document.write("<br>");
document.write(`El término número ${n} de la Sucesión de Fibonacci usando el algoritmo iterativo es ${fibonacciIterativo(n)}`);