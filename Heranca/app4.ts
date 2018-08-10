import {ConcessionariaDao} from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa';
import {PessoaDao} from './PessoaDao'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('',[])

let pessoa = new Pessoa('','')
let pdao = new PessoaDao()

dao.inserir(concessionaria);
pdao.atualizar(pessoa)