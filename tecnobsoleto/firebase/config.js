// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU1lTrfCSG5qegrXI3lHUWt2T2_kGefoU",
  authDomain: "tecnobsoleto-nextjs-coder.firebaseapp.com",
  projectId: "tecnobsoleto-nextjs-coder",
  storageBucket: "tecnobsoleto-nextjs-coder.appspot.com",
  messagingSenderId: "994820523986",
  appId: "1:994820523986:web:7a5f261b2b5a02be27aa0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth( app );

export const provider = new GoogleAuthProvider()
 