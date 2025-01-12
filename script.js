// Firebase configuration
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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handling the form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      console.log("User signed up: ", userCredential.user);
      alert("Sign-up successful!");
    })
    .catch((error) => {
      // Error during sign-up
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('error-message').innerText = `Error: ${errorMessage}`;
    });
});
