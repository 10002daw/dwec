function parImpar(num) {
	return ( num%2 == 0 ) ? "par" : "impar";
}

for ( let i=0; i<50; i++ ) {
    num = parseInt(Math.random()*10000+1);
    document.write(`${num} ${parImpar(num)}<br>`);
}