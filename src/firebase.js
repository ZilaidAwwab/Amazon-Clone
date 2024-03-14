import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbJtV9njRtIQlj4JedzLmYUdDxS0nsPDk",
  authDomain: "clone-83995.firebaseapp.com",
  projectId: "clone-83995",
  storageBucket: "clone-83995.appspot.com",
  messagingSenderId: "123192770600",
  appId: "1:123192770600:web:28aa2f47226053415ef51d",
  measurementId: "G-HKQQN0R9DY",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
