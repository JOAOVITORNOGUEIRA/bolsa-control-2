// src/routes.js
import React from "react";

//Importar as propriedades do react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Importar Componentes
import Menu from "./components/Menu";

//Importar nossas pages
import Principal from "./pages/principal";
import Detalhes from "./pages/detalhes";
import Login from "./pages/login";
import Contato from "./pages/contato";
import Sobre from "./pages/sobre";

// Criar um componentes chamado routes que vai ter as nossas rotas
const AppRoute = () => (
    <BrowserRouter>
    <Menu></Menu>
        <Routes>
             <Route path="/" element={<Principal />} />
            <Route path="/detalhes" element={<Detalhes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    </BrowserRouter>
);

// Vamos exportar esse componente
export default AppRoute;