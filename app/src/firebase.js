//https://www.youtube.com/watch?v=pP7quzFmWBY

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from "firebase/database"
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";
// Corrected the import from 'firebase/data-base' to 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk2FOt6wGUBv2gt6yoUjfguO65UYyG_Gs",
  authDomain: "landscape-website-a9bfc.firebaseapp.com",
  databaseURL: "https://landscape-website-a9bfc-default-rtdb.firebaseio.com",
  projectId: "landscape-website-a9bfc",
  storageBucket: "landscape-website-a9bfc.firebasestorage.app",
  messagingSenderId: "1014850036526",
  appId: "1:1014850036526:web:0717a41a44d9aa221190bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize other Firebase services
const functions = getFunctions(app);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize Realtime Database

// Export the initialized services so they can be used anywhere in your app
export { functions, analytics, database };
