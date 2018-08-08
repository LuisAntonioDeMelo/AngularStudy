export default class {
    private nome  : string  =''
    private modelo: string = ''
    private marca : string = ''
    private cor : string = ''

    constructor(nome:string,modelo:string,marca:string,cor:string){
        this.nome = nome
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
    }

    public getNome(){
        return this.nome
    }
}