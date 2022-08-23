import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAVdfGMz99zNXZ3hRCy3ws5P6NFUfLn0wU",
    authDomain: "fir-reactojl8787.firebaseapp.com",
    projectId: "firebasereactojl8787",
    storageBucket: "firebasereactojl8787.appspot.com",
    messagingSenderId: "659823193348",
    appId: "1:659823193348:web:1e1253076c67be606bf451"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const googleAuthProvider =  new GoogleAuthProvider();
const facebookAuthProvider =   new FacebookAuthProvider();

export {app,auth,googleAuthProvider,facebookAuthProvider,db};