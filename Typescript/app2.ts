import Carro,{qualquerCoisa as x} from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


let carroA = new Carro('Dodge jorney',4);
let carroB = new Carro('Veloster',3);
let carroC = new Carro('Cerato',4);

let listadeCarros : Carro[] = [carroA,carroB,carroC]
let concessionaria = new Concessionaria('Avenida Afonso', listadeCarros);


//console.log(concessionaria.mostrarListaDeCarros());

// comprar o carro

let cliente = new Pessoa('Luis','Veloster');
// console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro :Carro)=> {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //comprar carro
        cliente.comprarCarro(carro)
    }
   
})
let p = new Pessoa('Joana','Ferrari');
let valid:boolean = false
concessionaria.mostrarListaDeCarros().map((carro:Carro)=> {
    if(carro['modelo']== cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
        valid = true
    }
    if(!valid){ 
        console.log("Nao temos esse carro!");
    }

})

console.log(cliente.dizerCarroPreferido())