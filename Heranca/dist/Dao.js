"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('lógica delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('logica get all');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
