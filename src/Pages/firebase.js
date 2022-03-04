import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOmdum_A9SP4Vs9CqNAYhknhoGnQNVQWk",
  authDomain: "mini-res-master-74028.firebaseapp.com",
  projectId: "mini-res-master-74028",
  storageBucket: "mini-res-master-74028.appspot.com",
  messagingSenderId: "36431678473",
  appId: "1:36431678473:web:6bc184348afbd69ce63cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default getFirestore();