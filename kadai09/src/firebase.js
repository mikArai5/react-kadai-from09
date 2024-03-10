import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD31w6HssXpHLKkW3J6f6429MGNzK7T7FQ",
  authDomain: "kadai09-843e8.firebaseapp.com",
  projectId: "kadai09-843e8",
  storageBucket: "kadai09-843e8.appspot.com",
  messagingSenderId: "560875874915",
  appId: "1:560875874915:web:ec64caf141bf5c3ba9e656",
  measurementId: "G-X3XCH29893"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };