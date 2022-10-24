// Import the functions you need from the SDKs you need
import { initializeApp, getApp , getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ2zWwIBQFHE-OvQ3TN1bhY6TyVUqidGw",
  authDomain: "insta-2-yt-b4aef.firebaseapp.com",
  projectId: "insta-2-yt-b4aef",
  storageBucket: "insta-2-yt-b4aef.appspot.com",
  messagingSenderId: "404580475163",
  appId: "1:404580475163:web:3b8a3293319bcf0a1373be"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };