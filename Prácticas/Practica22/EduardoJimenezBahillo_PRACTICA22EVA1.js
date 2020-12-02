function Punto(x, y) {
    //Propiedades
    this.x = isNaN(x)? 0 : x;
    this.y = isNaN(y)? 0 : y;

    //Métodos
    this.cambiar = function (x,y) {
        this.x = isNaN(x)? 0 : x;
        this.y = isNaN(y)? 0 : y;
    };

    this.copia = () => new Punto(this.x, this.y);

    this.iguales = (q) => q.x==this.x && q.y==this.y;

    this.suma = (q) => new Punto(q.x+this.x, q.y+this.y);

    this.toString = () => `(${this.x},${this.y})`;
}


/*
Creamos dos puntos para probar los métodos con ellos.
A uno le pasamo un valor no numérico para comprobar si 
se almacena un 0.
*/
a = new Punto(2,4);
b = new Punto(3,"d");

/*
Prueba del método toString y el acceso a las propiedades.
*/
console.log("Prueba toString");
console.log(b.x); // 3
console.log(b.y); // 0
console.log(a.toString()); // (2,4)
console.log(b.toString()); // (3,0)
console.log("---------------------");

/*
Prueba del método cambiar.
*/
console.log("Prueba cambiar");
a.cambiar(-7,3);
console.log(a.toString()); // (-7,3)
b.cambiar("adef",-8);
console.log(b.toString()); // (0,-8)
console.log("---------------------");

/*
Prueba del método copia.
Cambiamos las variables de la copia para comprobar que el objeto
que hemos copiado no se ve afectado.
*/
console.log("Prueba copia");
c = a.copia();
console.log(c.toString()); // (-7,3)
c.cambiar(0,-8);
console.log(a.toString()); // (-7,3)
console.log(c.toString()); // (0,-8)
console.log("---------------------");

/*
Prueba del método iguales.
*/
console.log("Prueba iguales");
console.log(b.iguales(c)); // true
console.log(c.iguales(b)); // true
console.log(a.iguales(c)); // false
console.log("---------------------");

/*
Prueba del método suma.
*/
console.log("Prueba suma");
console.log(a.suma(b).toString()); // (-7,-5)
console.log("---------------------");