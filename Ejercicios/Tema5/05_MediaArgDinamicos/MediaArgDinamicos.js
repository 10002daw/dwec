function media(...numeros) {
    let suma=0;
    for ( const numero of numeros ) {
        suma += numero;
    }
    return suma/numeros.length;
}

media(1,2,3,4,);
media(3,56,6,23,1);