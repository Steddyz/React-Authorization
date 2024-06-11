// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ABGhxhOXUCyDjRUhpuW8EDihN9cU38M",
  authDomain: "react-authorization-fddaf.firebaseapp.com",
  projectId: "react-authorization-fddaf",
  storageBucket: "react-authorization-fddaf.appspot.com",
  messagingSenderId: "889552966409",
  appId: "1:889552966409:web:fac4cc6f0e1658e07b39d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
