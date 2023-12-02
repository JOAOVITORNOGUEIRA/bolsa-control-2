// src/pages/sobre/index.js
import React from "react";
import './index.css';

const Sobre = () => {
    return (
        <div className="main-content">
        <div className="about-section">
          <h1 className="welcome-message">
            Bem-vindo ao BolsaControl, seu parceiro confiável em contabilidade pessoal.
          </h1>
          <p className="paragraph">
          BolsaControl é muito mais do que uma plataforma de controle financeiro. Somos seu aliado 
          dedicado a simplificar o complexo universo das finanças pessoais. Com uma abordagem inovadora e 
          amigável, nosso objetivo é oferecer a você uma experiência confiável e eficiente no gerenciamento de 
          suas finanças. Seja para entender suas despesas, planejar investimentos ou equilibrar seu fluxo de 
          caixa, estamos aqui para fornecer as ferramentas e insights necessários para garantir seu sucesso 
          financeiro.
          </p>
        </div>

        <div className="financial-summary">
          <h1 className="heading">Fluxo de Caixa</h1>
          <p className="paragraph">
          O Fluxo de Caixa é a espinha dorsal de qualquer estratégia financeira sólida. Em BolsaControl, 
          oferecemos uma visão abrangente e fácil de entender do seu fluxo financeiro. Explore suas entradas e 
          saídas de dinheiro de forma transparente. Além disso, analise o Valor Total a Pagar e a Receber para 
          uma compreensão holística da sua situação financeira. O Valor Total a Pagar representa seus 
          compromissos financeiros, enquanto o Valor Total a Receber destaca suas fontes de renda. A seção 
          Diferença revela a discrepância entre esses valores, permitindo uma tomada de decisão informada para 
          moldar seu futuro financeiro. Na BolsaControl, estamos comprometidos em capacitá-lo a tomar as rédeas
           do seu destino financeiro com confiança.
          </p>

          <h1>O Que é o Valor Total a Pagar</h1>
          <p>
          O Valor Total a Pagar na BolsaControl é mais do que apenas um número em sua tela; é um reflexo
           cuidadoso de seus compromissos financeiros. Aqui, você terá acesso a uma visão clara e organizada de 
           todas as suas despesas planejadas. Desde contas mensais até investimentos e parcelamentos, o Valor 
           Total a Pagar oferece um panorama abrangente das suas obrigações financeiras. Através de gráficos 
           intuitivos e ferramentas interativas, você pode explorar detalhes específicos, identificar padrões 
           e tomar decisões informadas sobre como otimizar seus gastos.
          </p>

          <h1>O Que é o Valor Total a Receber</h1>
          <p>
          Enquanto o Valor Total a Pagar ilumina suas saídas financeiras, o Valor Total a Receber lança 
          luz sobre suas entradas de receita. Esta seção fornece uma análise detalhada de todas as fontes 
          de renda, desde salários e freelances até dividendos e investimentos. Ao explorar o Valor Total a 
          Receber, você terá uma compreensão completa do seu potencial financeiro. A Diferença, por sua vez, 
          revela a distância entre o que você espera receber e o que está programado para pagar. Este indicador 
          valioso ajuda a identificar áreas de oportunidade para economia, investimento ou ajustes em seus 
          planos financeiros. Na BolsaControl, acreditamos que fornecer essa clareza é crucial para capacitá-lo 
          a alcançar suas metas financeiras com confiança.
          </p>

          <h1> Entendendo a Diferença entre Valor Total a Pagar e Valor Total a Receber</h1>
          <p>
          No universo financeiro, a dicotomia entre o Valor Total a Pagar e o Valor Total a Receber é 
          crucial para a saúde econômica pessoal. O Valor Total a Pagar representa o compromisso financeiro, 
          encapsulando despesas regulares, investimentos e obrigações. Por outro lado, o Valor Total a Receber
           destaca as entradas de dinheiro, provenientes de salários, fontes de renda secundárias e investimentos.
            A compreensão desses dois valores é vital para alcançar um equilíbrio financeiro saudável, pois o 
            caminho para a prosperidade reside na harmonia entre o que gastamos e o que recebemos.
          </p>

          <h1> A Importância da Diferença na BolsaControl</h1>
          <p>
          É na seção da Diferença que a verdadeira magia acontece. Aqui, a BolsaControl oferece uma análise
           perspicaz da discrepância entre o Valor Total a Pagar e o Valor Total a Receber. Se a Diferença 
           é positiva, revela uma situação financeira sustentável, indicando que você tem mais receitas do que
            despesas. No entanto, se é negativa, sinaliza uma necessidade de avaliação e ajustes no plano
             financeiro. Ao entender a Diferença, você pode identificar oportunidades de economia, investimento 
             e otimização financeira, capacitando-se a tomar decisões fundamentadas para garantir a estabilidade
             e o crescimento financeiro a longo prazo.
          </p>
        </div>
      </div>
    );
}

export default Sobre;