export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        //
        // ou:
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> {
    //   return this.negociacoes;
    // }
    //
    // ou:
    lista() {
        return this.negociacoes;
    }
}
