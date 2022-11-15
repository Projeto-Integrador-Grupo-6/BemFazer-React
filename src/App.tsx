import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import './App.css';
import Login from "./paginas/login/Login";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import SobreNos from './paginas/sobreNos/SobreNos';

import CadastroCat from './components/categorias/cadastroCat/CadastroCat';
import ListaCat from './components/categorias/listaCat/ListaCat';
import DeletarCat from './components/categorias/deletarCat/DeletarCat';



function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/sobrenos" element={<SobreNos />} />

          <Route path="/categorias" element={<ListaCat />} />
          <Route path="/formularioCategoria" element={<CadastroCat />} />
          <Route path="/formularioCategoria/:id" element={<CadastroCat />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCat />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
