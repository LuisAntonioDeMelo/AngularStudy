import {DaoInterface} from './DaoInterface'
import Pessoa from './Concessionaria'

export class PessoaDao implements DaoInterface{
   
    nomeTabela: string = 'tb_concessionaria'

    inserir(object : any):boolean{
        console.log('logica de insert')
        return true
    }
    
    atualizar(object:any):boolean {
        console.log('logica update')
        return true
    }


    remover (id:number):Pessoa {
        console.log('lógica delete')
        return new Pessoa('',[])
    }

    selecionar(id:number): Pessoa {
        console.log('lógica select')
        return new Pessoa('',[])
    }
    
    selecionarTodos():[any]{
        console.log('logica get all')
        return [new Pessoa('',[])]
    }
}