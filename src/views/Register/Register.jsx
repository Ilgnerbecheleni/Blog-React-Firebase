import { useState } from 'react';
import './style.css'
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import {createUserWithEmailAndPassword  } from 'firebase/auth'
import { auth } from '../../firebase/firebase';

function Register() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

function Registrar (event){
event.preventDefault()
  createUserWithEmailAndPassword (auth , email , password).then((userCredencial)=>{
    const user = userCredencial.user;
    console.log('User : ', user); 
    window.location.href = "/postagens";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode);
    console.error(errorMessage);
  });



}


  return (
    <main className="login">
      <form className='formulario' onSubmit={Registrar}>
        <div>
          <h1>Registre-se</h1>
        </div>
        <div>
         <input type="email" placeholder='E-mail' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        </div> 
          <div>
         <input type="password" placeholder='Senha'value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
      <button type='submit'>Entrar</button>
<div>
  <a href="/login">Já é cadastrado ? Entre</a>
</div>
<div className='social'>
<FcGoogle size={30}/>
<AiFillGithub size={30}/>
</div>

      </form>
    </main>
  )
}

export default Register
