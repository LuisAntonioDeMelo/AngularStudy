class NegociacaoController {
   private inputData:HTMLInputElement
   private inputQuantidade:HTMLInputElement
   private inputValor:HTMLInputElement
   private negociacoes:Negociacoes = new Negociacoes()
   private negociacoesView = new NegociacaoView("#negociacaoView")

   constructor(){
        this.inputData = <HTMLInputElement>document.querySelector('#data')
        this.inputData = <HTMLInputElement>document.querySelector('#quantidade')
        this.inputData = <HTMLInputElement>document.querySelector('#valor')
   }

   adiciona(event:Event){

        event.preventDefault()
         const negociao = new Negociacao(
             new Date(this.inputData.value.replace(/-/g,',')),
             parseInt(this.inputQuantidade.value),
             parseFloat(this.inputValor.value)
         );

         console.log(negociacao);
          
         this.negociacoes.adiciona(negociacao);
         
         this.negociacoes.paraArray().forEach(negociacao => {
              console.log(negociacao.data)
              console.log(negociacao.quantidade)
              console.log(negociacao.valor)
              console.log(negociacao.volume)
         })
     }
}