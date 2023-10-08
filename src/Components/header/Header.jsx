import  { useState, useEffect } from 'react';
import { AiFillHome, AiOutlineNotification, AiOutlineLogin } from 'react-icons/ai';
import { signOut } from 'firebase/auth'; // Importe a função de logout do Firebase Authentication
import { auth } from '../../firebase/firebase';
import {BiUserCircle} from 'react-icons/bi'

import './style.css';

function Header() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUsuarioAutenticado(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <nav className='header'>
      <h1>Comenta DEV</h1>
      <ul className='menu'>
        <li className='menu-item'><a href="/" className='menu-link botao'><AiFillHome size={20} color='white' /> Home </a></li>
      
        {usuarioAutenticado ? (
          <>
            <li className='menu-item'><a href="/postagens" className='menu-link botao'><AiOutlineNotification size={20} color='white' /> Postagens</a></li>
            <li className='menu-item'><button onClick={handleLogout} className='menu-link botao' >{usuarioAutenticado.photoUrl ?  
          <img src={usuarioAutenticado.photoURL} alt="Usuário" className='user' />:
          <BiUserCircle size={20} color='white'/>
          } Logout</button></li>
          </>
        ) : (
          <li className='menu-item'><a href="/login" className='menu-link'><AiOutlineLogin size={20} color='white' /> Login</a></li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
