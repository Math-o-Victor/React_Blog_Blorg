import './App.css';
import Footer from './components/static/footer/Footer'
import Navbar from './components/static/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTemas/ListaTemas';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';

import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaTema />} />
          <Route path="/ideias" element={<ListaPostagem />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/novaIdeia" element={<CadastroPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarIdeia/:id" element={<DeletarPostagem />} />
          <Route path="/deletarCateg/:id" element={<DeletarTema />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
