import './styles.css';
import defaultUserImage from '../../assets/nerd.png'
function Card({ conteudo,titulo , foto , user  }) {
   return (
    <div className="card">
      {/* Verifique se há uma imagem de usuário. Se não, use a imagem padrão. */}
      <img src={foto||defaultUserImage} alt="" className="user-imagem" />
         
      <div className="post-details">
        <div className="titulo">{titulo || 'Título da Postagem'}</div>
        <div className="conteudo">
         {conteudo}
        </div>
        <div className="autor">Autor: {user}</div>
      </div>
    </div>
  );
}

export default Card;
