let str = "Hola caracola";
let forin = "";
let forof = "";

for ( let i in str ) {
    forin += str[i]+"<br>";
}

for ( let value of str ) {
    forof += value+"<br>";
}

document.getElementById("forin").innerHTML = forin;
document.getElementById("forof").innerHTML = forof;