// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcJloKx3e7E07qZJ1YpbMBLIMkeaC226A",
  authDomain: "app-test-51383.firebaseapp.com",
  databaseURL: "https://app-test-51383-default-rtdb.firebaseio.com",
  projectId: "app-test-51383",
  storageBucket: "app-test-51383.appspot.com",
  messagingSenderId: "837937152183",
  appId: "1:837937152183:web:1deb630496bd508aab8d32",
  measurementId: "G-VC7SSBWJ47"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
