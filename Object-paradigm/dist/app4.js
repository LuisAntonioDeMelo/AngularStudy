"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {ConcessionariaDao} from './ConcessionariaDao'
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = require("./Dao");
//import {PessoaDao} from './PessoaDao'
//let dao: ConcessionariaDao = new ConcessionariaDao()
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
//let pdao = new PessoaDao()
var dao = new Dao_1.Dao();
dao.inserir(concessionaria);
//dao.atualizar(pessoa);
dao.remover(5);
dao.atualizar(concessionaria);
