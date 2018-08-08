"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carroA = new Carro_1.default('Dodge jorney', 4);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Cerato', 4);
var listadeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Avenida Afonso', listadeCarros);
//console.log(concessionaria.mostrarListaDeCarros());
// comprar o carro
var cliente = new Pessoa_1.default('Luis', 'Veloster');
// console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar carro
        cliente.comprarCarro(carro);
    }
});
var p = new Pessoa_1.default('Joana', 'Ferrari');
var valid = false;
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
        valid = true;
    }
    if (!valid) {
        console.log("Nao temos esse carro!");
    }
});
console.log(cliente.dizerCarroPreferido());
