num1 = [1.15,2.33,3.99,4.50];
num2 = ["cinco","seis","siete"];

$1 = num1.concat(num2);
console.log($1);

$1.pop();
$1.shift();
console.log($1);

$1.unshift("primero")
$1.push("otro");
console.log($1);

for ( let i in $1 ) {
    if ( !isNaN($1[i]) ) {
        $1[i] = Math.trunc($1[i]);
    }
}
console.log($1);

console.log($1.join(" y "));

console.log($1.slice(1,4).join(" y "));