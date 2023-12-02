// src/pages/contato/index.js
import React from "react";
import './index.css';  // Alterado o caminho do arquivo CSS

const Contato = () => {
    return (
        <div className="main-content contact-content">
            <div className="contact-section">
                <h1 className="contact-heading">Qualquer Dúvida</h1>
                <p className="contact-info">
                    Entre em contato através do email: contato@bolsacontrol.com
                </p>
                {/* Adicione mais informações se necessário */}
            </div>
        </div>
    );
}

export default Contato;