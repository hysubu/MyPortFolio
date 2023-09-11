// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2pXf3uuLtXSKhQ1KlfSMh3ZbWELoufFM",
  authDomain: "subrat-portfolio.firebaseapp.com",
  projectId: "subrat-portfolio",
  storageBucket: "subrat-portfolio.appspot.com",
  messagingSenderId: "326588023533",
  appId: "1:326588023533:web:e50a047eb0bc21ca5f82e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db  =  getFirestore()