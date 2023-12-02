// src/service/usuario-service.js

import service from "./service";

const usuarioMock = {
    id: 1,
    nome:"João Vitor",
    email: "joao@outlook.com",
    perfil: {
        id: 1,
        descricao: "manager"
    }
};

const autenticado = {
    tokken: "bWluaGFzZW5oYXN1cGVyZm9ydGU=",
    usuario : usuarioMock
}

function login(email, senha) {

    return new Promise((resolve, reject) => {


        if(email !== "admin@admin.com" || senha !== "123456"){
            return reject ("Usuário ou senha inválidos!")
        }
    

      return resolve (autenticado);
    });
}

// Metodo real que vai na api tentar logar o usuario.
/*    
function login(email, senha) {
  return new Promise((resolve, reject) => {
    return service.post("/api/login", { email, senha })
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}
*/

function obterTodos() {
    return new Promise((resolve, reject) => {
      return service.get("/api/usuarios")
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

export default {
    login,
    obterTodos,

}