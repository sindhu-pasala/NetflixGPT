// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBErxyIc6dQTSj8BsS3PYkk_8FE4_P6Sjs",
  authDomain: "netflixgpt-fe3de.firebaseapp.com",
  projectId: "netflixgpt-fe3de",
  storageBucket: "netflixgpt-fe3de.appspot.com",
  messagingSenderId: "379842749546",
  appId: "1:379842749546:web:2d359ff4fb7b8220d31613",
  measurementId: "G-HBG4RLSVTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
