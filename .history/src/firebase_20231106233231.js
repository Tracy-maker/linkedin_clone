import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByJo6BBMHfGItRF7HGj5zxbiHdhlcVcmU",
  authDomain: "linkedin-clone-31fc8.firebaseapp.com",
  projectId: "linkedin-clone-31fc8",
  storageBucket: "linkedin-clone-31fc8.appspot.com",
  messagingSenderId: "198073496226",
  appId: "1:198073496226:web:0720a8e5f7132ae718ddfb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
