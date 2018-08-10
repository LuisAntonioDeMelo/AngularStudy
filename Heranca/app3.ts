import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carr = new Carro('Sedan',4, 4);
let moto = new Moto ()
let concessionaria = new Concessionaria('',[]) 

carr.acelerar()
moto.acelerar()


console.log(carr)
console.log(moto)
console.log(concessionaria.fornecerHorariosDeFuncionamento())