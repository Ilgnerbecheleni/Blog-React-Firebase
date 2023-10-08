import { useEffect, useState } from "react";
import { database } from "../../firebase/firebase";
import {
    collection,
    addDoc,
} from "firebase/firestore";
import "./style.css"; // Importe um arquivo de estilo CSS separado
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
function CriarPost() {
    const [Conteudo, setConteudo] = useState("");
    const [Titulo, setTitulo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [usuariophoto, setUsuarioPhoto] = useState("");


    useEffect(() => {
        // Use onAuthStateChanged para ouvir alterações no estado de autenticação do usuário
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Se o usuário estiver autenticado, preencha os campos com as informações do usuário
                setUsuario(user.email || ""); // Nome do usuário
                setUsuarioPhoto(user.photoURL || ""); // URL da foto do usuário
                console.log(user)
            } else {
                // Se o usuário não estiver autenticado, defina os campos como vazios
                setUsuario("");
                setUsuarioPhoto("");
            }
        });
    }, []);

    async function criarDado() {
        try {
            const user = await addDoc(collection(database, "posts"), {
                Conteudo,
                Titulo,
                usuario,
                usuariophoto
            });

            console.log("Dados salvos com sucesso:", user);
        } catch (e) {
            console.error("Erro ao adicionar documento:", e);
        }
    }
    return (
        <div className="criar-post-container">
          <h1>Criar Post</h1>
          <div className="user-info">
            <img src={usuariophoto} alt="Foto do Usuário" />
            <p>{usuario}</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              criarDado();
            }}
            className="criar-post-form"
          >
            {/* ... outros campos do formulário */}
            <div className="form-group">
              <label>Título:</label>
              <input
                type="text"
                value={Titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Conteúdo:</label>
              <textarea
                value={Conteudo}
                onChange={(e) => setConteudo(e.target.value)}
              />
            </div>
            {/* ... outros campos do formulário */}
            <button type="submit" className="btn-criar-post">
              Criar Post
            </button>
          </form>
        </div>
      );
    }
    
    export default CriarPost;
