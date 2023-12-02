// src/pages/principal/index.js
import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default class Principal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorConta: "",
            tipoConta: "pagar", // Valor padrão, pode ser alterado para "receber" também
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    adicionarConta = () => {
        // Lógica para adicionar a conta (será implementada posteriormente)
        console.log("Adicionar conta:", this.state);
    };

    render() {
        console.log('Renderizando o componente Principal');
        return (
            <div className="principal">
                <h1>Fluxo de Caixa</h1>
                
                <div className="caixa-info">
                    <div className="info-item">
                        <h2>Valor Total a Pagar</h2>
                        <p>R$ 11.000,00</p> {/* Substitua pelo valor real */}
                    </div>

                    <div className="info-item">
                        <h2>Valor Total a Receber</h2>
                        <p>R$ 10.500,00</p> {/* Substitua pelo valor real */}
                    </div>

                    <div className="info-item">
                        <h2>Diferença</h2>
                        <p>R$ 6.500,00</p> {/* Substitua pelo valor real */}
                    </div>
                </div>
                        <br></br>

                <Link to="/detalhes">Fluxo Salvo</Link>

            <div className="adicionar-conta">
                <h1>Adicionar Conta</h1>
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
        </div>
    );
}
};