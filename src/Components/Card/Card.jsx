import './styles.css';
import defaultUserImage from '../../assets/user.jpg'
function Card({ conteudo ,titulo , foto , user  }) {
   return (
    <div className="card">
      {/* Verifique se há uma imagem de usuário. Se não, use a imagem padrão. */}
      <div className="user-image" style={{ backgroundImage: `url(${foto || defaultUserImage})` }}></div>

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
