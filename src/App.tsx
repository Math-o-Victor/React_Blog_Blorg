import './App.css';
import Footer from './components/static/footer/Footer'
import Navbar from './components/static/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Routes>
          <Route path="" element={<Login />}/>
          <Route path= "/" element={<Login />}/> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/cadastroNewUser" element={<CadastroUsuario />} /> 
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
