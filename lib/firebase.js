// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmWJbGBG98rt1Wg7XSjvntFvrchYY1ROk",
    authDomain: "nextjschatapp-676f6.firebaseapp.com",
    projectId: "nextjschatapp-676f6",
    storageBucket: "nextjschatapp-676f6.appspot.com",
    messagingSenderId: "29256829616",
    appId: "1:29256829616:web:03951147342bc2c85e8975",
    measurementId: "G-KBKY53H5D6"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };