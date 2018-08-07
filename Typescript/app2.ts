class Car {
     
    private modelo:string
    private numeroDePortas :number
    private velocidade: number
    

    constructor(modelo:string,numeroDePortas:number,velocidade:number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
        this.velocidade = velocidade
    }

    public acelerar(): void{
        this.velocidade += 10
    }
    
    public parar():void {
        this.velocidade = 0;
    }

    public velocidadeAtual():number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco : string
    private listaDeCarros :any

    constructor(endereco :string){
        this.endereco = endereco
    }

    public fornecerEndereco():string {
        return this.listaDeCarros
    }
}

let concessionaria = new Concessionaria("La en")
console.log(concessionaria)



// let car = new Car('Fiat',2,0) 

// car.acelerar()
// car.velocidadeAtual()  
// car.acelerar()
// car.acelerar()
// car.acelerar()
// console.log(car)
// car.acelerar()
// car.acelerar()
// car.acelerar()
// console.log(car)