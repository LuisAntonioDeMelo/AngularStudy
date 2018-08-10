import {DaoInterface} from './DaoInterface'
import Conceessionaria from './Concessionaria'
import Concessionaria from './Concessionaria';

export class ConcessionariaDao implements DaoInterface<Concessionaria> {
   
    nomeTabela: string = 'tb_concessionaria'

    inserir(object : any):boolean{
        console.log('logica de insert')
        return true
    }
    
    atualizar(object:any):boolean {
        console.log('logica update')
        return true
    }


    remover (id:number):Concessionaria {
        console.log('lógica delete')
        return new Concessionaria('',[])
    }

    selecionar(id:number): Concessionaria {
        console.log('lógica select')
        return new Concessionaria('',[])
    }
    
    selecionarTodos():[any]{
        console.log('logica get all')
        return [new Concessionaria('',[])]
    }
}