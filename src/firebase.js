// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5Q65AQThjDiDMVCd8QDL4sIKiaZ3xWQ",
  authDomain: "expense-tracker-5cb0b.firebaseapp.com",
  projectId: "expense-tracker-5cb0b",
  storageBucket: "expense-tracker-5cb0b.appspot.com",
  messagingSenderId: "328403550514",
  appId: "1:328403550514:web:d395b27a543ff04510972b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;