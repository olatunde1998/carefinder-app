
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA5Ml4LYUaBbEaZr7z86_Rcj7JQspR8wIo",
  authDomain: "carefinder-app-db.firebaseapp.com",
  projectId: "carefinder-app-db",
  storageBucket: "carefinder-app-db.appspot.com",
  messagingSenderId: "180800749901",
  appId: "1:180800749901:web:9406d634aec5f054663704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const providers = new GithubAuthProvider();