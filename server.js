// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSWWOFiD4Yf5dj3kpTg_e3ywK2cZid-C4",
  authDomain: "temp-b0506.firebaseapp.com",
  projectId: "temp-b0506",
  storageBucket: "temp-b0506.appspot.com",
  messagingSenderId: "102361411577",
  appId: "1:102361411577:web:2b4d0af01a45777d3cd728",
  measurementId: "G-C9CYGY8S93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById("signup").addEventListener('click', function(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        email
        const user = userCredential.user;
        // ...
        console.log("created user")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode + errorMessage);
    });
})
