// src/styles/geral-styles.js
import styled from "styled-components";

export const DivPersonalizada = styled.div`
    width: ${props => props.width};
    border: ${props => props.border};
    padding: 25px;
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
`;

// Correção aqui, usando export default diretamente
export const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--cor-primaria);

    li {
    float: left;
}

li:last-child {
    float: right;
}

li:first-child {
    margin-left: 20px;
}

li a {
    display: block;
    color: #fff;
    padding: 15px 17px;
    text-decoration: none;
    text-align: center;
}

li a:hover {
        background-color: var(--cor-secundaria);
}
`;

