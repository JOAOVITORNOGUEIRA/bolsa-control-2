// src/pages/detalhes/index.js
import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default class Detalhes extends React.Component {
  state = {
    dadosDaTabela: [
      { id: 1, valorAPagar: 3000, valorAReceber: 5000, diferenca: 2000 },
      { id: 2, valorAPagar: 1000, valorAReceber: 2000, diferenca: 1000 },
      { id: 3, valorAPagar: 7000, valorAReceber: 3500, diferenca: 3500 },
      // Adicione mais entradas conforme necessário
    ],
    totaisEDiferenca: {
      totalAPagar: 0,
      totalAReceber: 0,
      diferencaTotal: 0,
    },
  };

  gerarIDUnico = () => {
    return Math.floor(Math.random() * 1000000);
  };

  calcularTotaisEDiferenca = () => {
    const { dadosDaTabela } = this.state;

    // Calcular totais
    const totalAPagar = dadosDaTabela.reduce((total, entrada) => total + entrada.valorAPagar, 0);
    const totalAReceber = dadosDaTabela.reduce((total, entrada) => total + entrada.valorAReceber, 0);
    const diferencaTotal = totalAReceber - totalAPagar;

    // Atualizar o estado
    this.setState({
      totaisEDiferenca: {
        totalAPagar,
        totalAReceber,
        diferencaTotal,
      },
    });
  };

  handleAtualizar = (id) => {
    // Lógica para atualizar os valores
    console.log(`Atualizar entrada com id ${id}`);
  };

  handleDeletar = (id) => {
    // Lógica para deletar a entrada
    console.log(`Deletar entrada com id ${id}`);
  };

  componentDidMount() {
    // Calcular totais e diferença ao montar o componente
    this.calcularTotaisEDiferenca();
  }

  render() {
    const { dadosDaTabela, totaisEDiferenca } = this.state;

    return (
      <div className="detalhes">
        <h1>Estou na Página de Detalhes</h1>
        <Link to="/">Voltar para a Página Principal</Link>

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
            {dadosDaTabela.map((entrada) => (
              <tr key={entrada.id}>
                <td>{entrada.valorAPagar}</td>
                <td>{entrada.valorAReceber}</td>
                <td>{entrada.diferenca}</td>
                <td>
                  <button onClick={() => this.handleAtualizar(entrada.id)}>
                    Atualizar
                  </button>
                  <button onClick={() => this.handleDeletar(entrada.id)}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
            {/* Nova linha para totais e diferença */}
            <tr key={this.gerarIDUnico()}>
              <td>{totaisEDiferenca ? totaisEDiferenca.totalAPagar : 0}</td>
              <td>{totaisEDiferenca ? totaisEDiferenca.totalAReceber : 0}</td>
              <td>{totaisEDiferenca ? totaisEDiferenca.diferencaTotal : 0}</td>
              <td>
                {/* Botões de atualizar e deletar para totais e diferença */}
                <button onClick={() => this.handleAtualizar("totaisEDiferenca")}>
                  Atualizar
                </button>
                <button onClick={() => this.handleDeletar("totaisEDiferenca")}>
                  Deletar
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total a Pagar</td>
              <td>Total a Receber</td>
              <td>Diferença Total</td>
              <td></td>
            </tr>
            <tr>
              <td>{totaisEDiferenca ? totaisEDiferenca.totalAPagar : 0}</td>
              <td>{totaisEDiferenca ? totaisEDiferenca.totalAReceber : 0}</td>
              <td>{totaisEDiferenca ? totaisEDiferenca.diferencaTotal : 0}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
