class NegociacaoView {
    constructor(selector) {
        this.selector = selector;
        this.elemento = document.querySelector(selector);
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
    template() {
        return ` 
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            </tbody>
            
            <tfoot>
        </tfoot>
        /table>
        `;
    }
}
