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
import ListaServico from './components/servicos/listaServico/ListaServico';
import CadastroServico from './components/servicos/cadastroServico/CadastroServico';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import DeletarServico from './components/servicos/deleteServico/DeleteServico';
import Time from './paginas/time/Time';
import PaginaInicial from './paginas/paginaInicial/PaginaInicial';



function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/time" element={<Time />} />

          <Route path="/categorias" element={<ListaCat />} />
          <Route path="/formularioCategoria" element={<CadastroCat />} />
          <Route path="/formularioCategoria/:id" element={<CadastroCat />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCat />} />
          <Route path="/deletarServico/:id"element={<DeletarServico />} />

          <Route path="/servicos" element={<ListaServico />} />
          <Route path="/formularioServico" element={<CadastroServico />} />
          <Route path="/formularioServico/:id" element={<CadastroServico />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
