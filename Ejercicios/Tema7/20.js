s1 = document.getElementById("s1");
console.log(s1.childNodes);
console.log(s1.childElementCount);
nodo = s1.firstElementChild;
console.log(nodo.nodeName);
for ( const hijo of s1.children) {
    console.log(hijo.nodeName);
}
nodoHermano = nodo.nextElementSibling;
console.log(nodoHermano.childElementCount);