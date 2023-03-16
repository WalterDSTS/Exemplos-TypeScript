import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public obterNegociacoesDoDia(): Promise<Array<Negociacao>> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: Array<NegociacoesDoDia>) =>
        dados.map(
          (dadoHoje) =>
            new Negociacao(new Date(), dadoHoje.vezes, dadoHoje.montante)
        )
      );
  }
}
