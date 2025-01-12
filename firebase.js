// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsz1oCCnC6cfGuz-BgypNU5vfGyhNmORw",
  authDomain: "tmx-27db6.firebaseapp.com",
  projectId: "tmx-27db6",
  storageBucket: "tmx-27db6.firebasestorage.app",
  messagingSenderId: "1039087524135",
  appId: "1:1039087524135:web:91792eb81974c186c43102",
  measurementId: "G-88W0C2WRJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
   app,
   auth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
}
