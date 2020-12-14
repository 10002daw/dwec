function Ordenador(marca, modelo, ram=4, disco=512, pulgadas=17) {
    //Propiedades
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;

    //Métodos
    this.toString = function() {
        str = `${this.constructor.name}(`;
        str += `Marca: ${marca}, `;
        str += `Modelo: ${modelo}, `;
        str += `Memoria RAM: ${ram} GB, `;
        str += `Disco duro: ${disco} GB, `;
        str += `Pantalla: ${pulgadas} pulgadas`;
        str += `)`;

        return str;
    };
}

function Portatil(marca, modelo, ram, disco=256, pulgadas=13, autonomia=4) {
    //Propiedades
    this.prototype = new Ordenador(marca, modelo, ram, disco, pulgadas);
    this.autonomia = autonomia;

    //Métodos
    this.toString = function() {
        str = this.prototype.toString.call(this);
        str = str.substr(0, str.length-1);
        str += `, Autonomía: ${autonomia} horas)`;
        return str;
    };
}

ordenador1 = new Ordenador('Ordenador1', 'Todos los parámetros', 8, 2048, 24);
ordenador2 = new Ordenador('Ordenador2', 'Sin parámetros');
portatil1 = new Portatil('Portátil1', 'Todos los parámetros', 6, 1024, 15, 8);
portatil2 = new Portatil('Portátil2', 'Sin parámetros');
console.log(ordenador1.toString());
console.log(ordenador2.toString());
console.log(portatil1.toString());
console.log(portatil2.toString());