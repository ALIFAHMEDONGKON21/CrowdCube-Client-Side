// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFS7srHeMmgvrmd17lS8TzptEPbKC8yzw",
  authDomain: "crowdcube-a5b4f.firebaseapp.com",
  projectId: "crowdcube-a5b4f",
  storageBucket: "crowdcube-a5b4f.firebasestorage.app",
  messagingSenderId: "351102766248",
  appId: "1:351102766248:web:fe4edc1466294109df469d",
  measurementId: "G-P8THBE4BEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
