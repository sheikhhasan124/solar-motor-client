// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWAQ6y2l23skiPbCihBwDHsYcWJRe1_Rw",
  authDomain: "sustainable-energy-tools.firebaseapp.com",
  projectId: "sustainable-energy-tools",
  storageBucket: "sustainable-energy-tools.appspot.com",
  messagingSenderId: "93524792639",
  appId: "1:93524792639:web:d557a3a035f6497c76af8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;