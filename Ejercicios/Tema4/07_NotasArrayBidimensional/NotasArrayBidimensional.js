let notas = [
    [
        "Manuel",
        3,
        4,
        2,
        3,
        4,
    ],
    [
        "Paco",
        5,
        6,
        7,
        8,
        9,
    ],
    [
        "Pepe",
        4,
        5,
        3,
        2,
        3,
    ],
];

for (let i=0; i < notas.length; i++) {
    document.write(`<h1>Notas de ${notas[i][0]}:</h1>`);
    for (let j=1; j < notas[i].length; j++) {
        if ( j != 1 ) {
            document.write(", ");
        }
        document.write(`Nota${j}->${notas[i][j]}`);
    }
    document.write("<br>");
}