"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = /** @class */ (function () {
    function default_1(nome, modelo, marca, cor) {
        this.nome = '';
        this.modelo = '';
        this.marca = '';
        this.cor = '';
        this.nome = nome;
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
    }
    default_1.prototype.getNome = function () {
        return this.nome;
    };
    return default_1;
}());
exports.default = default_1;
