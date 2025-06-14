
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

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

const signup = async (name, email, password) => {
  try {
    
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
    });

    return { success: true };
  } catch (error) {
    console.error("Error signing up:", error);
    toast.error(error.code);
  }
};


const login = async(email, password) => {
  try {
    const res1 = await signInWithEmailAndPassword(auth, email, password);
    const user = res1.user;
    return { success: true, user };
  } catch (error) {
    console.error("Error logging in:", error);
    toast.error(error.code);
    return { success: false, error: error.code };
  }
}

const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
    toast.error(error.code);
  }
};


export { app, analytics, auth, db, signup, login, logout};