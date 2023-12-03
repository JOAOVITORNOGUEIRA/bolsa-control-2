// src/pages/principal/index.js
import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorConta: "",
      tipoConta: "pagar",
      dadosDaTabela: [],
      totalAPagar: 0,
      totalAReceber: 0,
      diferencaTotal: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  adicionarConta = () => {
    const { valorConta, tipoConta, dadosDaTabela } = this.state;

    // Validar se o valorConta é um número positivo
    if (!isNaN(valorConta) && parseFloat(valorConta) > 0) {
      const novaEntrada = {
        id: new Date().getTime(), // Usando timestamp como ID (substitua pelo seu gerador de ID)
        valorConta: parseFloat(valorConta),
        tipoConta,
      };

      // Atualizar o estado com a nova entrada
      this.setState(
        {
          dadosDaTabela: [...dadosDaTabela, novaEntrada],
          valorConta: "",
        },
        () => {
          // Recalcular totais e diferença após a adição
          this.calcularTotaisEDiferenca();
        }
      );
    }
  };

  handleAtualizarEntrada = (id) => {
    const { dadosDaTabela } = this.state;
    const entradaAtualizar = dadosDaTabela.find((entrada) => entrada.id === id);

    // Pode implementar um modal ou formulário para obter os novos valores
    const novoValorConta = prompt("Novo Valor da Conta:", entradaAtualizar.valorConta);
    const novoTipoConta = prompt("Novo Tipo de Conta:", entradaAtualizar.tipoConta);

    if (novoValorConta !== null && novoTipoConta !== null) {
      const novosDados = dadosDaTabela.map((entrada) =>
        entrada.id === id
          ? {
              ...entrada,
              valorConta: parseFloat(novoValorConta),
              tipoConta: novoTipoConta,
            }
          : entrada
      );

      this.setState(
        { dadosDaTabela: novosDados },
        () => this.calcularTotaisEDiferenca()
      );
    }
  };

  handleDeletarEntrada = (id) => {
    const { dadosDaTabela } = this.state;
    const confirmacao = window.confirm("Tem certeza que deseja deletar esta entrada?");
    if (confirmacao) {
      const novosDados = dadosDaTabela.filter((entrada) => entrada.id !== id);

      this.setState(
        { dadosDaTabela: novosDados },
        () => this.calcularTotaisEDiferenca()
      );
    }
  };

  calcularTotaisEDiferenca = () => {
    const { dadosDaTabela } = this.state;

    const totalAPagar = dadosDaTabela
      .filter((entrada) => entrada.tipoConta === "pagar")
      .reduce((total, entrada) => total + entrada.valorConta, 0);

    const totalAReceber = dadosDaTabela
      .filter((entrada) => entrada.tipoConta === "receber")
      .reduce((total, entrada) => total + entrada.valorConta, 0);

    const diferencaTotal = totalAReceber - totalAPagar;

    // Atualizar o estado com os novos totais e diferença
    this.setState({
      totalAPagar,
      totalAReceber,
      diferencaTotal,
    });
  };

  render() {
    const { dadosDaTabela, totalAPagar, totalAReceber, diferencaTotal } = this.state;

    return (
      <div className="principal">
        <h1>Fluxo de Caixa</h1>
        <div className="tabela">
          <table>
            <thead>
              <tr>
                <th>Valor</th>
                <th>Tipo</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {dadosDaTabela.map((entrada) => (
                <tr key={entrada.id}>
                  <td>{entrada.valorConta}</td>
                  <td>{entrada.tipoConta}</td>
                  <td>
                    <button onClick={() => this.handleAtualizarEntrada(entrada.id)}>
                      Atualizar
                    </button>
                    <button onClick={() => this.handleDeletarEntrada(entrada.id)}>
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="adicionar-conta">
          <div className="input-group">
            <label className="tipo" htmlFor="valorConta">Valor da Conta</label>
            <input
              type="text"
              id="valorConta"
              name="valorConta"
              value={this.state.valorConta}
              onChange={this.handleChange}
              placeholder="R$ 10.000,00"
            />
          </div>

          <div className="input-group">
            <label className="tipo" htmlFor="tipoConta">Tipo de Conta</label>
            <select
              id="tipoConta"
              name="tipoConta"
              value={this.state.tipoConta}
              onChange={this.handleChange}
            >
              <option value="pagar">A Pagar</option>
              <option value="receber">A Receber</option>
            </select>
          </div>

          <button onClick={this.adicionarConta}>Adicionar</button>
        </div>

        <div className="caixa-info">
          <div className="info-item">
            <h2>Valor Total a Pagar</h2>
            <p>R$ {totalAPagar}</p>
          </div>
          <div className="info-item">
            <h2>Valor Total a Receber</h2>
            <p>R$ {totalAReceber}</p>
          </div>
          <div className="info-item">
            <h2>Diferença</h2>
            <p>R$ {diferencaTotal}</p>
          </div>
        </div>
        <br></br>
        <Link to="/detalhes">Fluxo Salvo</Link>
      </div>
    );
  }
}
