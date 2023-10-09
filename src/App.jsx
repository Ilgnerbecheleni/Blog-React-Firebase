
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home/Home'
import Postagens from './views/Postagens/Postagens'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Autenticacao from './Components/Autenticacao/Autenticacao'
import CriarPost from './views/CriarPost/CriarPost'
import Acount from './views/Acount/Acount'
function App() {


  return (
    <Routes>
     <Route path="/" element={<Home />}/>
    <Route path="/postagens" element={<Autenticacao> <Postagens /></Autenticacao>}/>
    <Route path="/criarpost" element={<Autenticacao> <CriarPost /></Autenticacao>}/>
    <Route path="/acount" element={<Autenticacao> <Acount /></Autenticacao>}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
</Routes>
  )
}

export default App
