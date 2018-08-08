let mensagem: string ="Seja bem vindo!!!"
let temporaradsFriends :number =10
let estuandoAngular : boolean = true
let listaDeFrutas : Array <string> = ['Uva','Banana','Abacaxi']
let lista2 : number[] = [2,4,5,6,78,9,12]
let notasDasProvas : Array <number> = [7.5,8,9]

for(let i =0; i < lista2.length; i++){
    for(let j = 0; j < lista2.length; j++){
        if(lista2[i] < lista2[j]){
            let temp :number =  lista2[i]
            lista2[i] = lista2[j]
            lista2[j] = temp
        }
    }
}
const search(val:number[],pos:number)=>{
    return bsearch(val,pos,0,val.length);
}

const bsearch(val:number[],pos:number,ini:number,end:number){
    let mid = ini + (end - ini)/2
    if(ini > end){
        return -1
    }
    else if(val[mid] > pos){
        return bsearch(val,)
    }

    return 0

}


console.log(lista2)


