"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carr = new Carro_1.default('Sedan', 4, 4);
var moto = new Moto_1.default();
var concessionaria = new Concessionaria_1.default('', []);
carr.acelerar();
moto.acelerar();
console.log(carr);
console.log(moto);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
