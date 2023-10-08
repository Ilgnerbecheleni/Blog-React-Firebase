import Card from "../../Components/Card/Card"
import './style.css'

import { useEffect, useState } from 'react';

import { database } from "../../firebase/firebase";
import {
   collection,
   doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
function Postagens() {
  const [postagens, setPostagens] = useState([]);

  

  const usersCollectionRef = collection(database, "posts");

  // async function criarDado() {
  //   try {
  //     const user = await addDoc(collection(db, "users"), {
  //       name,
  //       email,
  //     });

  //     console.log("dados salvos com sucessos", user);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setPostagens(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(postagens)
    };
    getUsers();
  }, []);

  async function deleteUser(id) {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  return (
    <main className="postagens">
<h1> Postagens</h1>
<a href="/criarpost" className="btn">Criar Post</a>      
{postagens.map((postagem) => (
        <Card
          key={postagem.id} // Certifique-se de usar uma chave única para cada Card
          conteudo={postagem.Conteudo} // Substitua com a propriedade correta do objeto postagem
          titulo={postagem.Titulo} // Substitua com a propriedade correta do objeto postagem
          foto={postagem.usuariophoto} // Substitua com a propriedade correta do objeto postagem
          user={postagem.usuario} // Substitua com a propriedade correta do objeto postagem
        />
      ))}
    </main>
  )
}

export default Postagens
