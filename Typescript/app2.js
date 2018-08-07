var Car = /** @class */ (function () {
    function Car(modelo, numeroDePortas, velocidade) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }
    Car.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Car.prototype.parar = function () {
        this.velocidade = 0;
    };
    Car.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Car;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var concessionaria = new Concessionaria("La en");
console.log(concessionaria);
// let car = new Car('Fiat',2,0) 
// car.acelerar()
// car.velocidadeAtual()  
// car.acelerar()
// car.acelerar()
// car.acelerar()
// console.log(car)
// car.acelerar()
// car.acelerar()
// car.acelerar()
// console.log(car)
