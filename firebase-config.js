// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMg1-r160vp81YopUjAL-n_s9_KZdAuhA",
  authDomain: "book-club-1cd49.firebaseapp.com",
  projectId: "book-club-1cd49",
  storageBucket: "book-club-1cd49.firebasestorage.app",
  messagingSenderId: "968129985056",
  appId: "1:968129985056:web:dc6f4ad8046a30023d5a45",
  measurementId: "G-W76CNFGXD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
