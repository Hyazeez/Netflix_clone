
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC22qZ_4z9-15AzelII3kHuxsdglrToaVo",
  authDomain: "netflix-clone-7288b.firebaseapp.com",
  projectId: "netflix-clone-7288b",
  storageBucket: "netflix-clone-7288b.firebasestorage.app",
  messagingSenderId: "592371286570",
  appId: "1:592371286570:web:31194977c8ce1382ce7953",
  measurementId: "G-FF69MSS2BN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const db = getFirestore(app);

const signup = async(name, email, password) => {
    
}