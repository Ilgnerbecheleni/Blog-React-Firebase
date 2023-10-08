import { useState } from 'react';
import './style.css'
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import {signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider  } from 'firebase/auth'
import { auth } from '../../firebase/firebase';
import { provider } from '../../firebase/firebase';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

function logarComGoogle(){
  
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    // The signed-in user info.
    const user = result.user;
    console.log('User : ', user); 
    
    window.location.href = "/postagens";
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


function logar (event){
event.preventDefault()
  signInWithEmailAndPassword(auth , email , password).then((userCredencial)=>{
    const user = userCredencial.user;
    console.log('User : ', user); 
    
    window.location.href = "/postagens";
  }) .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode);
    console.error(errorMessage);
  });



}


  return (
    <main className="login">
      <form className='formulario' onSubmit={logar}>
        <div>
          <h1>Login</h1>
        </div>
        <div>
         <input type="email" placeholder='E-mail' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        </div> 
          <div>
         <input type="password" placeholder='Senha'value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
      <button type='submit'>Entrar</button>
<div>
  <a href="/register">Registre-se</a>
</div>
<div className='social'>
<FcGoogle size={30} onClick={logarComGoogle}/>
<AiFillGithub size={30}/>
</div>

      </form>
    </main>
  )
}

export default Login
