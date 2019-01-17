class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacaoView("#negociacaoView");
        this.inputData = document.querySelector('#data');
        this.inputData = document.querySelector('#quantidade');
        this.inputData = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociao = new Negociacao(new Date(this.inputData.value.replace(/-/g, ',')), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
        console.log(negociacao);
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        });
    }
}
