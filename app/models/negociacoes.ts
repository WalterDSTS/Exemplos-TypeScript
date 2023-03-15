import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = [];
  //
  // ou:

  private negociacoes: Negociacao[] = [];


  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> {
  //   return this.negociacoes;
  // }
  //
  // ou:
  
  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}