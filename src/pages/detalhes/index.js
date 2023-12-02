import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default class Detalhes extends React.Component {
  state = {
    dadosDaTabela: [
      { id: 1, valorAPagar: 3000, valorAReceber: 5000, diferenca: 2000 },
      { id: 2, valorAPagar: 1000, valorAReceber: 2000, diferenca: 1000 },
      { id: 3, valorAPagar: 7000, valorAReceber: 3500, diferenca: 3500 },
      // Add more entries as needed
    ],
  };

  render() {
    const { dadosDaTabela } = this.state;

    return (
      <div className="detalhes">
        <h1>Controle de Contas</h1>
        <br></br>
        <Link to="/">Voltar</Link>

        {/* Tabela */}
        <table>
          <thead>
            <tr>
              <th>Valor a Pagar</th>
              <th>Valor a Receber</th>
              <th>Diferença</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {dadosDaTabela.map((item) => (
              <tr key={item.id}>
                <td>{item.valorAPagar}</td>
                <td>{item.valorAReceber}</td>
                <td>{item.diferenca}</td>
                <td>
                  <button>Atualizar</button>
                  <button>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total a Pagar</td>
              <td>Total a Receber</td>
              <td>Diferença Total</td>
              <td></td> {/* A coluna de opções na parte inferior pode estar vazia */}
            </tr>
            <tr>
              <td>{dadosDaTabela.reduce((total, item) => total + item.valorAPagar, 0)}</td>
              <td>{dadosDaTabela.reduce((total, item) => total + item.valorAReceber, 0)}</td>
              <td>{dadosDaTabela.reduce((total, item) => total + item.diferenca, 0)}</td>
              <td></td> {/* A coluna de opções na parte inferior pode estar vazia */}
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
