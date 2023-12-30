// firebaseConfig.js
import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDO2xwNdJDSHlNYthuDGgc8gT8oAoV-AuI",
  authDomain: "cafeina-01.firebaseapp.com",
  projectId: "cafeina-01",
  storageBucket: "cafeina-01.appspot.com",
  messagingSenderId: "95369840837",
  appId: "1:95369840837:web:150b1d01b9008f650388ac",
  measurementId: "G-EZ83RZVNER"
};


const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;