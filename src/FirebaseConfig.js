// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";

import "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCS-Rytx0Y3gysBTm0e_30ul99Cm7kAWKE",

    authDomain: "cv-camilo-mejia.firebaseapp.com",
  
    projectId: "cv-camilo-mejia",
  
    storageBucket: "cv-camilo-mejia.appspot.com",
  
    messagingSenderId: "1056873529733",
  
    appId: "1:1056873529733:web:12361e3b728a6cf81a04ec",
  
    measurementId: "G-1PTBWD1SZR"
  
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);