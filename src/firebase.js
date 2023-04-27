// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAHXSEL34q0PQsly2-lwmEp5aMye8NazZU",
    authDomain: "task-tracker-application-f4cf0.firebaseapp.com",
    projectId: "task-tracker-application-f4cf0",
    storageBucket: "task-tracker-application-f4cf0.appspot.com",
    messagingSenderId: "1091246243359",
    appId: "1:1091246243359:web:193f429f8cdbebc69c1f2a"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
