import Veiculo from './Veiculo'

export default class Carro extends Veiculo {
    private numeroDePortas : number

    constructor(modelo:string,numeroDePortas :number,velocidade :number){
        super()
        this.modelo = modelo
        this.velocidade = velocidade
        this.numeroDePortas = numeroDePortas
    }

    public getModelo(): string {
        return this.modelo
    }

    public setModelo(modelo : string):void {
        this.modelo = modelo
    }




}