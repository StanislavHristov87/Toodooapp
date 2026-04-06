// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6yW8kV5th1_m29Oj6ZEA01Oj-NLEvU6E",
  authDomain: "toodooapp-5b8ae.firebaseapp.com",
  projectId: "toodooapp-5b8ae",
  storageBucket: "toodooapp-5b8ae.firebasestorage.app",
  messagingSenderId: "958963997811",
  appId: "1:958963997811:web:9923dbc2581f822de71e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);