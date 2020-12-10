function Ordenador(marca, modelo, ram=4, disco=512, pulgadas=17) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;

    this.toString = function() {
        str = `${this.constructor.name} de la marca ${marca} y modelo ${modelo} con las siguientes características: `;
        str += `Memoria RAM: ${ram} GB. `;
        str += `Disco duro: ${disco} GB. `;
        str += `Pantalla: ${pulgadas} pulgadas. `;

        return str;
    };
}

function Portatil(marca, modelo, ram=4, disco=256, pulgadas=13, autonomia=4) {
    this.__proto__ = new Ordenador(marca, modelo, ram, disco, pulgadas);
    this.autonomia = autonomia;

    this.toString = function() {
        str = this.__proto__.toString();
        str += `Autonomía: ${autonomia} horas.`;
        return str;
    };
}

prueba = new Ordenador('aaa', 'adfa', 8);

console.log(prueba.toString());

prueba2 = new Portatil('asd','das');
console.log(prueba2.toString());