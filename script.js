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

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const signupForm = document.getElementById('signup-form');
const messageDiv = document.getElementById('message');

// Handle sign-up form submission
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Store name in Firebase Firestore
    const db = firebase.firestore();
    await db.collection('users').doc(user.uid).set({
      name: name,
      email: email,
    });

    messageDiv.textContent = 'Account created successfully!';
    messageDiv.style.color = 'green';
  } catch (error) {
    messageDiv.textContent = `Error: ${error.message}`;
    messageDiv.style.color = 'red';
  }
});
