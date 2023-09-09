// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK_LX6K2k2fSVKMftvXMt-2q3qbwYv6VM",
  authDomain: "ecomerce-clothes.firebaseapp.com",
  projectId: "ecomerce-clothes",
  storageBucket: "ecomerce-clothes.appspot.com",
  messagingSenderId: "1049384565532",
  appId: "1:1049384565532:web:d0da8d5d9be93bdf0158d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);