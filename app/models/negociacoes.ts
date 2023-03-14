import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = [];
  //
  // ou:

  private negociacoes: Negociacao[] = [];


  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> {
  //   return this.negociacoes;
  // }
  //
  // ou:
  
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}