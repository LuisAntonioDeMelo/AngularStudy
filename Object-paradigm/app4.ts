//import {ConcessionariaDao} from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa';
import {Dao} from './Dao'
//import {PessoaDao} from './PessoaDao'

//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('',[])
let pessoa = new Pessoa('','')

//let pdao = new PessoaDao()
let dao : Dao  <Concessionaria> = new Dao<Concessionaria>();
dao.inserir(concessionaria);
//dao.atualizar(pessoa);
dao.remover(5);
dao.atualizar(concessionaria)