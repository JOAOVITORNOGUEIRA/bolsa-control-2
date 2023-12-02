// src/pages/login/index.css       
import React, { useState } from "react";
import { Button } from "../../styles/form-styles";
import { DivPersonalizada } from "../../styles/geral-styles";
import InputText from "../../components/Inputtext";
import usuarioService from "../../service/usuario-service";
import storage from "../../utils/storage";
import Usuario from "../../model/Usuario";
import './index.css';


const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    

    const login = () => {  
        usuarioService.login(email, senha)
        .then(response => {
            const { token, usuario } = response;
            storage.salvarToken(token);
            storage.salvarUsuario(new Usuario(usuario))
            window.open("/", "_self");
        })
        .catch(error => {
            console.log(error);
            alert(error)
        })

    };

  
    return (

        <DivPersonalizada
            width="300px"
            margin="auto"
            border="1px solid #ddd"
            marginTop="60px"
        >
            <div className="logo">
                <h1>Login</h1>
            </div>

            <div className="group">
                <InputText
                    id="email"
                    placeholder="exemplo@exemplo.com"
                    text="E-mail"
                    callback={(e) => setEmail(e.target.value)}
                ></InputText>
            </div>

            <div className="group">
                <InputText
                    id="senha"
                    placeholder="123456"
                    text="Senha"
                    callback={(e) => setSenha(e.target.value)}
                    type="password"
                ></InputText>
            </div>

            <Button onClick={login}>Entrar</Button>

            <div className="esqueci-senha">
                <a href="#">Esqueci minha senha</a>
            </div>
        </DivPersonalizada>


    );
}


export default Login;
/*
    1° Importar os componentes que pricisaremos para o projeto
        1.1 Style Componente--OK
        1.2 Criar novos Components com base no Style Component-- OK

    2° Criar um menu dinamnico para o sistema.    

    3° Aprender a trabalhar com requisições Ajasx, o famoso HTTP.
        3.1 Axios, fech Api

    4° Aprender a utilizar o localstorage

    5° A trabalhar com Hooks (useState e useEffect)
*/