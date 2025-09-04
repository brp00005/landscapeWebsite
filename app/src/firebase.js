//https://www.youtube.com/watch?v=pP7quzFmWBY

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from "firebase/data-base"

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
const db = getDatabase