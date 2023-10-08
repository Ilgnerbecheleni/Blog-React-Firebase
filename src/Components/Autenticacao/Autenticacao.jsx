import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import PaginaRedirecao from './PaginaRedirecao';
const Autenticacao = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // O callback é chamado quando o estado de autenticação do usuário muda
      if (user) {
        // O usuário está autenticado, você pode executar a lógica desejada aqui
        setUsuarioAutenticado(user);
      } else {
        // O usuário não está autenticado, você pode executar a lógica desejada aqui
        setUsuarioAutenticado(null);
      }
    });

    // Certifique-se de cancelar a inscrição do evento ao desmontar o componente
    return () => unsubscribe();
  }, []); // Certifique-se de fornecer um array vazio para que o efeito seja executado apenas uma vez

  if (usuarioAutenticado) {
    return children;
  } else {
    return <PaginaRedirecao/>;
  }
};

export default Autenticacao;
