/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:  import.meta.env.VITE_AUTH_DOMAIN,
  projectId:  import.meta.env.VITE_PROTECTEDID,
  storageBucket:  import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:  import.meta.env.VITE_MESSARINGSEND,
  appId:  import.meta.env.VITE_APPID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Initialize Realtime Database and get a reference to the service
const database = getFirestore(app);


export  {app , auth , database,provider} ;

