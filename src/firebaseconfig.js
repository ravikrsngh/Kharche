import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//request.time < timestamp.date(2022, 10, 29);

const firebaseConfig = {
  apiKey: "AIzaSyCXjVzTsy_kxdvT0TnBBcA6QLNsQcUnilM",
  authDomain: "kharche-173f7.firebaseapp.com",
  projectId: "kharche-173f7",
  storageBucket: "kharche-173f7.appspot.com",
  messagingSenderId: "451777050353",
  appId: "1:451777050353:web:020fbc3d75c4316fdfdb50",
  measurementId: "G-ZZCGHPSDEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth , db};
