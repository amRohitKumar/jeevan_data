import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAhx7jM70mraS2Oz8ufl5kVus38K2QdZl4",
  authDomain: "jeevandata-a16fb.firebaseapp.com",
  projectId: "jeevandata-a16fb",
  storageBucket: "jeevandata-a16fb.appspot.com",
  messagingSenderId: "871026109842",
  appId: "1:871026109842:web:8884a046cbf6675cc8e54b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword };